import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
  background-color: #666468ff;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 44px;
  font-weight: 600;
  color: #100f10ff;
  @media screen and (max-width: 767px) {
    font-size: 32px;
  }
`
export const InputNotBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 80%;
  border-radius: 6px;
  background-color: #e4daecff;
  box-shadow: 0px 4px 12px 2px #0a090aff;
  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 8px;
  }
`
export const TitleInputContainer = styled.input`
  display: flex;
  align-items: center;
  padding: 12px;
  border: none;
  outline: none;
  width: 70%;
  font-family: 'Roboto';
  background-color: transparent;
  font-size: 24px;
  font-weight: 600;
  color: #100f10ff;
  margin-bottom: 30px;
  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 14px;
  }
`
export const InputNote = styled.textarea`
  display: flex;
  align-items: center;
  padding: 12px;
  border: none;
  outline: none;
  width: 95%;
  font-family: 'Roboto';
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  color: #100f10ff;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`
export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
  background-color: #030303ff;
  color: #e4daecff;
  width: 100px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 12px;
  box-shadow: 0px 0px 14px 5px #040107ff;
  border: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    font-size: 13px;
    width: 80px;
    box-shadow: 0px 0px 10px 4px #040107ff;
  }
`
export const NoteListContainer = styled.ul`
  display: flex;
  align-items: center;
  width: 82%;
  flex-wrap: wrap;
  padding: 0px;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
export const EmptyImage = styled.img`
  width: 180px;
`
export const EmptyHead = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 500;
  color: #100f10ff;
`
export const EmptySubHead = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  color: #100f10ff;
`