import React, { useEffect, useState } from "react";
import * as S from "./style"
import { api } from "../../services/api"

export function Main (){
    const [list, setList] = useState ([])
    
    useEffect(() => {
        api.get().then((response) => setList (response.data))
    }, []) 

    return(
        <S.Container>
      {list.map((item, index) => (
        <S.ContainerConteudo>
          <S.Texto key={index}>{item.name}</S.Texto>
          <S.Img src={item.image} />
        </S.ContainerConteudo>
      ))}
    </S.Container>
    )
}