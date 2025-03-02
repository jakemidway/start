
import {Icon} from "../../../../components/icon/Icon.tsx";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import styled from "styled-components";

type TypeSkillProps = {
    iconId: string;
    widthIco?: string;
    heightIco?: string;
    discription?: string;

}

export const Skill = (props: TypeSkillProps) => {
    return (
        <FlexWrapper align="center" >
            <Icon iconId={props.iconId} width={props.widthIco} height={props.heightIco}/>
            <SkillDisc>{props.discription}</SkillDisc>
        </FlexWrapper>
    );
};

const SkillDisc = styled.div`
    margin: 0;
`






