import { THEME_TEXT_COLOR } from "../constants"

export default ({txt, hidden}) => {
    const splitArr = txt.toUpperCase().split(' ')
    const firstWord = splitArr[0]
            splitArr.shift()
    const rest_of_words = splitArr.join(' ')
    return(
        <div style={{
            fontSize:50,
            fontWeight:900,
            color:THEME_TEXT_COLOR,
            marginTop:10,
            marginBottom:10,
            visibility: hidden ? "hidden" :'unset'
        }}> 
            <span style={{
                color:"#c42b31"
            }}>{firstWord}</span>
            <span>{' '}</span>
            <span>{rest_of_words}</span>

        </div>
    )
}