import iconSprite from './icon-sprites.svg'

type TypeIconSprites = {
    width?: string
    height?: string
    viewBox?: string
    iconId: string
    fill?: string
}

export const Icon = (props: TypeIconSprites) => {
    return (
        <svg width={props.width || "52"} height={props.height || "50"} viewBox={props.viewBox || "0 0 52 50"} fill={props.fill || "#fff"} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">

                <use xlinkHref={`${iconSprite}#${props.iconId}`}/>


        </svg>
    );
};

