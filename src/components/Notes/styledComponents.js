// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
    padding: 30px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Heading = styled.h1`
    font-family:"Bree Serif";
    font-size: 42px;
    font-weight: 800;
    color: #4c63b6;
`
export const FormContainer = styled.form`
    background-color: #ffffff;
    box-shadow: 1px 0px 0px 0px #d8d8d8;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 30vh;
    width: 60vw;
`
export const InputElement = styled.input`
    height: 40px;
    width: 280px;
    
    font-family: "Roboto";
    font-size: 18px;
    color: #475569;
    outline: none;
    border:none;
`
export const BreakLine = styled.br``
export const TextArea = styled.textarea`
    
   
    font-family: "Roboto";
    font-size: 18px;
    color: #475569;
    background-color: #ffffff;
    border: none;
    outline: none;
`
export const CustomButton = styled.button`
    background-color: #4c63b6;
    font-family: "Roboto";
    font-size: 18px;
    height: 50px;
    width: 120px;
    padding: 5px;
    color: #ffffff;
    border: none;
    border-radius: 14px;
    align-self: flex-end;
    cursor: pointer;
`
export const NotesContainer = styled.div`
    width: 100%;
    padding: 0px;
`
export const UnOrderedList = styled.ul`
    list-style-type: none;
    padding: 0px;
    display: flex;
    flex-wrap:wrap;
`
export const NOListView = styled.div`
    height: 50vh;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const Image = styled.img`
    height: 200px;
`
export const HeadingNoText = styled.h1`
    font-family: "Roboto";
    font-size: 32px;
    font-weight: 600;
    color: #334155;
`
export const ParaNoNotes =styled.p`
        ont-family: "Roboto";
    font-size: 22px;
    color: #475569;
`