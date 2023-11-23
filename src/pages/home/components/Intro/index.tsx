import {IntroContainer, IntroContent,} from "./styles";
import introImg from "../../../../assets/Imagem.png"

export function Intro(){

    return(
        <IntroContainer>
            <IntroContent className="container" >
                <div>

                </div>

                <img src={introImg} />
            </IntroContent>
        </IntroContainer>
    )
}