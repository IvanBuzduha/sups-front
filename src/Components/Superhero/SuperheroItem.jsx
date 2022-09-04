import React from "react"
import { useNavigate } from "../../../node_modules/react-router-dom/index";
import DeleteBtn from "../UI/Button/DeleteBtn";
import SubmitBtn from "../UI/Button/SubmitBtn";

const SuperheroItem = (props) => {
    const router = useNavigate();
    console.log('router :>> ', router);
    return (
        <li className="mt-4 flex flex-col relative mx-auto max-w-md px-4  py-6 bg-white border-0 shadow-lg sm:rounded-3xl">
            {/* <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/6/68/Superman01.jpg/227px-Superman01.jpg" alt="Superman" /> */}
            <p className=" mb-1 mt-1">Nickname: <span className="font-bold text-green-500 text-xl pl-8"> {props.hero.nickname}</span></p>
            <p className=" mb-1 mt-1">Real Name: <span className="font-normal text-green-500"> {props.hero.realName}</span></p>
            <p className=" mb-1 mt-1">Superpowers: <span className="font-normal text-gray-500"> {props.hero.superpowers}</span></p>
            <p className=" mb-1 mt-1">Catch Phrase: <span className="font-bold text-green-500"> {props.hero.catchPhrase}</span></p>
            <p className=" mb-1 mt-1">Origin Description: <span className="font-thin text-gray-500"> {props.hero.originDescription}</span></p>
           
            {/* <SubmitBtn onClick={()=>router.push('/${props.hero.id}')}>Open</SubmitBtn> */}
            <DeleteBtn onClick={()=>props.remove(props.hero)}>Delete</DeleteBtn>
        </li>
    );
}

export default SuperheroItem;