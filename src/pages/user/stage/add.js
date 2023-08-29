import { useState } from "react";
import { Col, InputTitle, Row, SmallTitle, Title, Wrappers, themeObj } from "src/components/elements/styled-components";
import { useVh } from "src/hooks/useVh";
import { m } from 'framer-motion'
import { varFade } from "src/components/animate";
import { Button, Drawer } from "@mui/material";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import styled from "styled-components";
import BlankLayout from "src/layouts/blank/BlankLayout";
import { replaceAt } from "src/utils/function";

const SelectButton = styled.div`
width:30%;
color:${themeObj.main_color.color3};
padding:1rem 0;
font-weight:bold;
`
let worry_list = [
    '연인', '가족', '학교', '친구', '부부', '직장', '사업', '자아', '인생', '창업', '건강', '법률', '기관', '사고', '싸움', '결혼', '직업', '이민', '과외', '주식', '기타'
]
let answer_type_list = [
    '위로', '팩폭', '전략', '지식', '사례', '노하우', '문제점', '다른의견'
]
let respondent_age_list = [
    '10대', '20대', '30대', '40대', '50대', '60대', '1020', '2030', '3040', '4050', '5060', '1060'
]
let respondent_sex_list = [
    '남자', '여자', '5:5'
]
let is_want_audience_list = [
    '관객이 들어와도 좋아요',
    '답변자들과만 대화할게요'
]
let stage_time_list = [
    '10분',
    '30분',
    '60분',
    '90분',
    '120분',
]
let mbti_list = [
    ['I', 'E'],
    ['S', 'N'],
    ['F', 'T'],
    ['J', 'P'],
    'MBTI 안믿어요',
]
const StageAdd = () => {//스테이지 개설

    const vh = useVh();
    const [activeStep, setActiveStep] = useState(0);
    const [windowStep, setWindowStep] = useState(0);
    const [addAlarmOpen, setAddAlarmOpen] = useState(false);
    const [stage, setStage] = useState({
        worry: undefined,
        answer_type: undefined,
        respondent_age: undefined,
        respondent_sex: undefined,
        is_want_audience: undefined,
        stage_time: undefined,
        mbti: '----',
    })
    useEffect(() => {
        setAddAlarmOpen(true);
    }, [])
    const getMbti = () => {
        let mbti = [...stage.mbti];
        if (mbti[0] >= 0) {
        }
    }
    const isDisableButton = () => {
        if (activeStep == 0) {
            return false;
        }
        if (activeStep == 1) {
            if (stage.worry >= 0) {
                onClickNextStep();
            }
        }
        if (activeStep == 2) {
            if (stage.answer_type >= 0) {
                onClickNextStep();
            }
        }
        if (activeStep == 3) {
            if (stage.respondent_age >= 0) {
                onClickNextStep();
            }
        }
        if (activeStep == 4) {
            if (stage.respondent_sex >= 0) {
                onClickNextStep();
            }
        }
        if (activeStep == 5) {
            if (stage.is_want_audience >= 0) {
                onClickNextStep();
            }
        }
        if (activeStep == 6) {
            if (stage.stage_time >= 0) {
                onClickNextStep();
            }
        }
        if (activeStep == 7) {
            let mbti = stage.mbti;
            let confirm_mbti = false;
            if(mbti.length == 4){
                for(var i = 0;i<4;i++){
                    if(mbti[i] == mbti_list[i][0] || mbti[i] == mbti_list[i][1]){
                        confirm_mbti = true;
                    }else{
                        confirm_mbti = false;
                        break;
                    }
                }
            }
            if(mbti == 0){
                confirm_mbti = true;
            }
            if (confirm_mbti) {
                return false;
            }
        }
        return true;
    }
    const onClickNextStep = async () => {
        window.scrollTo(0, 0);
        setActiveStep(activeStep + 1);
    }
    useEffect(() => {
        if (activeStep <= 7) {
            setWindowStep(0);
        }
    }, [activeStep])
    return (
        <>
            <Wrappers style={{
                minHeight: `${100 * vh}px`,
            }}>
                {windowStep == 0 &&
                    <>
                        {activeStep == 0 &&
                            <>
                                <m.div variants={varFade().inRight}>
                                    <Title style={{ marginBottom: '0' }}>김청님 <br />좋은 오후에요</Title>
                                </m.div>
                            </>}
                        {activeStep >= 7 &&
                            <>
                                <m.div variants={varFade().inRight}>
                                    <Title style={{ marginBottom: '0' }}>선호하는 MBTI가 <br />따로 있나요?</Title>
                                </m.div>
                                <m.div variants={varFade().inRight}>
                                    <Row style={{ flexWrap: 'wrap', }}>
                                        {mbti_list.slice(0, 4).map((item, idx) => (
                                            <>
                                                <Row style={{ width: '100%' }}>
                                                    <SelectButton
                                                        style={{
                                                            width: '50%',
                                                            color: `${stage?.mbti[idx] == item[0] ? themeObj.main_color.color1 : ''}`
                                                        }}
                                                        onClick={() => {
                                                            setStage({
                                                                ...stage,
                                                                mbti: replaceAt(stage.mbti, idx, item[0])
                                                            })
                                                        }}
                                                    >{item[0]}</SelectButton>
                                                    <SelectButton
                                                        style={{
                                                            width: '50%',
                                                            color: `${stage?.mbti[idx] == item[1] ? themeObj.main_color.color1 : ''}`
                                                        }}
                                                        onClick={() => {
                                                            replaceAt
                                                            setStage({
                                                                ...stage,
                                                                mbti: replaceAt(stage.mbti, idx, item[1])
                                                            })
                                                        }}
                                                    >{item[1]}</SelectButton>
                                                </Row>
                                            </>
                                        ))}
                                        <SelectButton
                                            style={{
                                                width: '100%',
                                                color: `${stage.mbti == 'XXXX' ? themeObj.main_color.color1 : ''}`
                                            }}
                                            onClick={() => {
                                                setStage({
                                                    ...stage,
                                                    mbti: 'XXXX'
                                                })
                                            }}
                                        >{mbti_list[mbti_list.length - 1]}</SelectButton>
                                    </Row>
                                </m.div>
                            </>}
                        {activeStep >= 6 &&
                            <>
                                <m.div variants={varFade().inRight}>
                                    <Title style={{ marginBottom: '0' }}>스테이지 시간을 <br />선택해주세요</Title>
                                </m.div>
                                <m.div variants={varFade().inRight}>
                                    <Row style={{ flexWrap: 'wrap', }}>
                                        {stage_time_list.map((item, idx) => (
                                            <>
                                                <SelectButton
                                                    style={{
                                                        color: `${stage.stage_time == idx ? themeObj.main_color.color1 : ''}`
                                                    }}
                                                    onClick={() => {
                                                        setStage({
                                                            ...stage,
                                                            stage_time: idx
                                                        })
                                                    }}
                                                >{item}</SelectButton>
                                            </>
                                        ))}
                                    </Row>
                                </m.div>
                            </>}
                        {activeStep >= 5 &&
                            <>
                                <m.div variants={varFade().inRight}>
                                    <Title style={{ marginBottom: '0' }}>스테이지 <br />관객 입장 여부</Title>
                                </m.div>
                                <m.div variants={varFade().inRight}>
                                    <Row style={{ flexWrap: 'wrap', }}>
                                        {is_want_audience_list.map((item, idx) => (
                                            <>
                                                <SelectButton
                                                    style={{
                                                        width: '100%',
                                                        color: `${stage.is_want_audience == idx ? themeObj.main_color.color1 : ''}`
                                                    }}
                                                    onClick={() => {
                                                        setStage({
                                                            ...stage,
                                                            is_want_audience: idx
                                                        })
                                                    }}
                                                >{item}</SelectButton>
                                            </>
                                        ))}
                                    </Row>
                                </m.div>
                            </>}
                        {activeStep >= 4 &&
                            <>
                                <m.div variants={varFade().inRight}>
                                    <Title style={{ marginBottom: '0' }}>답변자들의 성별을<br />선택해주세요.</Title>
                                </m.div>
                                <m.div variants={varFade().inRight}>
                                    <Row style={{ flexWrap: 'wrap', }}>
                                        {respondent_sex_list.map((item, idx) => (
                                            <>
                                                <SelectButton
                                                    style={{
                                                        color: `${stage.respondent_sex == idx ? themeObj.main_color.color1 : ''}`
                                                    }}
                                                    onClick={() => {
                                                        setStage({
                                                            ...stage,
                                                            respondent_sex: idx
                                                        })
                                                    }}
                                                >{item}</SelectButton>
                                            </>
                                        ))}
                                    </Row>
                                </m.div>
                            </>}
                        {activeStep >= 3 &&
                            <>
                                <m.div variants={varFade().inRight}>
                                    <Title style={{ marginBottom: '0' }}>답변자 연령층을 <br />선택해주세요.</Title>
                                </m.div>
                                <m.div variants={varFade().inRight}>
                                    <Row style={{ flexWrap: 'wrap', }}>
                                        {respondent_age_list.map((item, idx) => (
                                            <>
                                                <SelectButton
                                                    style={{
                                                        color: `${stage.respondent_age == idx ? themeObj.main_color.color1 : ''}`
                                                    }}
                                                    onClick={() => {
                                                        setStage({
                                                            ...stage,
                                                            respondent_age: idx
                                                        })
                                                    }}
                                                >{item}</SelectButton>
                                            </>
                                        ))}
                                    </Row>
                                </m.div>
                            </>}
                        {activeStep >= 2 &&
                            <>
                                <m.div variants={varFade().inRight}>
                                    <Title style={{ marginBottom: '0' }}>선호하는 답변 타입<br />골라주세요</Title>
                                </m.div>
                                <m.div variants={varFade().inRight}>
                                    <Row style={{ flexWrap: 'wrap', }}>
                                        {answer_type_list.map((item, idx) => (
                                            <>
                                                <SelectButton
                                                    style={{
                                                        color: `${stage.answer_type == idx ? themeObj.main_color.color1 : ''}`
                                                    }}
                                                    onClick={() => {
                                                        setStage({
                                                            ...stage,
                                                            answer_type: idx
                                                        })
                                                    }}
                                                >{item}</SelectButton>
                                            </>
                                        ))}
                                    </Row>
                                </m.div>
                            </>}
                        {activeStep >= 1 &&
                            <>
                                <m.div variants={varFade().inRight}>
                                    <Title style={{ marginBottom: '0' }}>고민 장르를<br />선택해주세요</Title>
                                </m.div>
                                <m.div variants={varFade().inRight}>
                                    <Row style={{ flexWrap: 'wrap', }}>
                                        {worry_list.map((item, idx) => (
                                            <>
                                                <SelectButton
                                                    style={{
                                                        color: `${stage.worry == idx ? themeObj.main_color.color1 : ''}`
                                                    }}
                                                    onClick={() => {
                                                        setStage({
                                                            ...stage,
                                                            worry: idx
                                                        })
                                                    }}
                                                >{item}</SelectButton>
                                            </>
                                        ))}
                                    </Row>
                                </m.div>
                            </>}
                        <Row style={{ position: 'fixed', bottom: '-0.1rem', left: '0', width: '100%', background: '#000' }}>
                            <Button variant="contained" size="large" sx={{ margin: '1rem auto', width: '90%' }} disabled={isDisableButton()} onClick={() => {
                                onClickNextStep();
                            }}>다음</Button>
                        </Row>
                    </>}
            </Wrappers>
            <Drawer
                anchor={'bottom'}
                open={addAlarmOpen}
                onClose={() => {
                    setAddAlarmOpen(false);
                }}
                disableScrollLock={true}
                sx={{
                    width: '100vw',
                }}
                BackdropProps={{
                    style: {
                        opacity: 0.5
                    }
                }}
                PaperProps={{
                    sx: {
                        backgroundColor: '#222',
                        maxWidth: '840px',
                        width: '100%',
                        margin: '0 auto',
                        borderTopLeftRadius: '24px',
                        borderTopRightRadius: '24px',
                        paddingBottom: '1rem',
                        position: 'fixed',
                        borderTop: `2px solid #fff`,
                        borderLeft: `2px solid #fff`,
                        borderRight: `2px solid #fff`

                    }
                }}
            >

                <Icon icon={'pepicons-pencil:line-x'} style={{ margin: '-1rem auto 0 auto', fontSize: '72px' }} />
                {addAlarmOpen &&
                    <>
                        <Col style={{ width: '90%', margin: '0 auto', height: '68vh' }}>
                            <m.div variants={varFade().inRight}>
                                <Title style={{ marginBottom: '0', marginTop: '0' }}>스테이지 개설을 <br />알리는 메인 문장이에요</Title>
                            </m.div>
                            <m.div variants={varFade().inRight}>
                                <SmallTitle>스테이지 환영 인사 또는 <br />간단한 안내가 입력되는 문장이에요.</SmallTitle>
                            </m.div>
                            <m.div variants={varFade().inRight} style={{ width: '100%', marginTop: 'auto', display: 'flex', flexDirection: 'column' }}>
                                <Row style={{
                                    alignItems: 'center',
                                    margin: 'auto auto 0 auto',
                                    cursor: 'pointer',
                                }}
                                    onClick={() => {
                                    }}
                                >
                                    <div style={{ fontSize: themeObj.font_size.size8 }}>스테이지 만드는 건 처음일까요?</div>
                                </Row>
                                <Button variant="contained" size="large" sx={{ margin: '1rem 0' }} disabled={isDisableButton()} onClick={() => {
                                    setAddAlarmOpen(false);
                                    onClickNextStep();

                                }}>시작하기</Button>
                            </m.div>
                        </Col>
                    </>}
            </Drawer>
        </>
    )
}
StageAdd.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default StageAdd;