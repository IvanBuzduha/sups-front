import {useMemo} from "react";

export const useSortedHeroes = (heroes, sort) => {
    const sortedHeros = useMemo(() => {
        if(sort) {
            return [...heroes].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return heroes;
    }, [sort, heroes])

    return sortedHeros;
}

export const useHeros = (heroes, sort, query) => {
    const sortedHeros = useSortedHeroes(heroes, sort);

    const sortedAndSearchedHeroes = useMemo(() => {
        return sortedHeros.filter(hero => hero.nickname.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedHeros])

    return sortedAndSearchedHeroes;
}
