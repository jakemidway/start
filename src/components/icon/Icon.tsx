import iconsSprite from '../../assets/img/icons-sprite.svg';

type IconPropsType = {
    iconId: string;
}


export const Icon = (props: IconPropsType) => {
    return (

        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}></use>
        </svg>

    );
};

