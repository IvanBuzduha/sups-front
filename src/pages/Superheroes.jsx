import React, { useEffect, useRef, useState } from "react";
import HeroService from "../API/HeroService";
import SuperheroFilter from "../Components/Superhero/SuperheroFilter";
import SuperheroForm from "../Components/Superhero/SuperheroForm";
import SuperheroList from "../Components/Superhero/SuperheroList";
import SubmitBtn from "../Components/UI/Button/SubmitBtn";
import Loader from "../Components/UI/Loader/Loader";
import CreateModal from "../Components/UI/Modals/CreateModal";
import Pagination from "../Components/UI/Pagination/Pagination";
import MySelect from "../Components/UI/Select/MySelect";
import { useFetching } from "../hooks/useFetching";
import { useHeros } from "../hooks/useHeroes";
import { useObserver } from "../hooks/useObserver";
import { getPageCount } from "../utils/pages";




function Superheroes  () {
    const [heroes, setHeroes] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(6);
    const [page, setPage] = useState(1);
    const [ open, setOpen ] = useState(false)
    const sortedAndSearchedHeroes= useHeros(heroes, filter.sort, filter.query);
    const lastElement = useRef()

    
    const [fetchHeroes, isHeroesLoading, heroError] = useFetching(async (limit, page) => {
        const response = await HeroService.getAll(limit, page);
        setHeroes([...heroes, ...response.data.data.superheroesForOnePage])
        // const totalPages = response.data.data.totalPages;
        const totalCount=response.data.data.totalCount;
       
        
        setTotalPages(getPageCount(totalCount, limit));
        
    })

    useObserver(lastElement, page < totalPages, isHeroesLoading, () => {
        setPage(page + 1);
    })

    useEffect(() => {
        fetchHeroes(limit, page)
    }, [page, limit])



    const createSuperhero = (newHero) => {
        setHeroes([...heroes, newHero])
        setOpen(false)
    }
    const removeSuperhero = (hero) => {
        setHeroes(heroes.filter(p => p.id !== hero.id))
    }
    const changePage = (page) => {
        setPage(page)
    }

    return (
        <> 
        <div>
            <div className="relative mx-auto max-w-md px-8 py-12 bg-white border-0 shadow-lg sm:rounded-3xl ">


       
                <SubmitBtn onClick={()=>setOpen(true)}>Create Superhero</SubmitBtn>


                <CreateModal open={open} onClose={()=> setOpen(false)} >
                    <SuperheroForm create={createSuperhero}/>
                </CreateModal>
                <SuperheroFilter filter={filter} setFilter={setFilter} />
                <MySelect
                    value={limit}
                    onChange={value => setLimit(value)}
                    defaultValue="Number of elements per page"
                    options={[
                        {value: 5, name: '5'},
                        {value: 10, name: '10'},
                        {value: 25, name: '25'},
                        {value: -1, name: 'Show all'},
                    ]}
                />
            </div>
            {heroError && <h2>An error has occurred ${heroError}</h2>
            }
            <SuperheroList remove={removeSuperhero} heros={sortedAndSearchedHeroes} title='Superheros list'/>
            <div ref={lastElement}/>
            {isHeroesLoading &&
            <div ><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
            
        </div>
        </>
    );
}

export default Superheroes;