import React, { useRef, useState } from "react";
import axios from "../../../node_modules/axios/index";
import DeleteBtn from "../UI/Button/DeleteBtn";
import SubmitBtn from "../UI/Button/SubmitBtn";
import MyInput from "../UI/Input/MyInput";
import MyTextarea from "../UI/Input/MyTextarea";

const SuperheroForm = ({ create }) => {
  const inputFileRef = useRef(null);
  const [image, setImage] = useState("");
  const [hero, setHero] = useState({
    nickname: "",
    realName: "",
    image: "",
    originDescription: "",
    superpowers: "",
    catchPhrase: "",
  });

  const addNewHero = (e) => {
    e.preventDefault();
    const newHero = { ...hero, id: Date.now() };
    create(newHero);
    setHero({
      nickname: "",
      realName: "",
      image: "",
      originDescription: "",
      superpowers: "",
      catchPhrase: "",
    });
    console.log("newHero :>> ", newHero);
  };
  const handleChangeFile = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      console.log("file :>> ", file);
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImage(data.url);
    } catch (error) {
      console.warn(error);
      alert("An error occurred while loading the file");
    }
  };

  const onClickRemoveImage = () => {
    setImage("");
  };
  return (
    <form>
      <label>Nickname</label>
      <MyInput
        value={hero.nickname}
        onChange={(e) => setHero({ ...hero, nickname: e.target.value })}
        placeholder="Superman"
        type="text"
      />

      <label>Real Name</label>
      <MyInput
        value={hero.realName}
        onChange={(e) => setHero({ ...hero, realName: e.target.value })}
        placeholder="Clark Kent"
        type="text"
        name={"realName"}
      />

      <label>Superpowers</label>
      <MyInput
        value={hero.superpowers}
        onChange={(e) => setHero({ ...hero, superpowers: e.target.value })}
        placeholder="solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight…"
        type="text"
        name={"superpowers"}
      />

      <label>Catch Phrase</label>
      <MyInput
        value={hero.catchPhrase}
        onChange={(e) => setHero({ ...hero, catchPhrase: e.target.value })}
        placeholder="“Look, up in the sky, it's a bird, it's a plane, it's Superman!”"
        type={"text"}
        name={"catch_phrase"}
      />

      <label>Origin Description</label>
      <MyTextarea
        value={hero.originDescription}
        onChange={(e) =>
          setHero({ ...hero, originDescription: e.target.value })
        }
        placeholder="he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction…"
        name={"origin_description"}
        rows={"5"}
        cols={"30"}
      />
      <SubmitBtn onClick={() => inputFileRef.current.click()}>
        Load Image
      </SubmitBtn>
      <input
        ref={inputFileRef}
        type="file"
        onChange={handleChangeFile}
        hidden
      />
      {/* {image && (
        <>
          <DeleteBtn onClick={onClickRemoveImage}>Delete</DeleteBtn>
          <img src={`http://localhost:3000${image}`} alt="Uploaded" />
        </>
      )} */}
      <SubmitBtn type="submit" onClick={addNewHero}>
        Create Superhero
      </SubmitBtn>
    </form>
  );
};

export default SuperheroForm;
