
import {Icon} from "../../../../components/icon/Icon.tsx";



type TypeSkillProps = {
    iconId: string;
    widthIco?: string;
    heightIco?: string;
    fill?: string;
}

export const Skill = (props: TypeSkillProps) => {
    return (

            <Icon iconId={props.iconId} width={props.widthIco} height={props.heightIco} fill={props.fill || 'white'} />

    );
};








