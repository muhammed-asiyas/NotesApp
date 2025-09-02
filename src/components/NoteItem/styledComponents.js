import styles from 'styled-components'

export const ListItem = styles.li`
  display: flex;
  flex-direction: column;
  border: 2px solid #100f10ff;
  border-radius: 8px;
  width: 300px;
  margin: 10px;
  padding: 12px;
  width: 340px;
  height: 200px;
  list-style-type: none;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 150px;
  }
`
export const TitleAndDeleteContainer = styles.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const TitleItem = styles.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #100f10ff;
`
export const DeleteIcon = styles.button`
  font-size: 20px;
  color: #100f10ff;
  cursor: pointer;
  background-color: transparent;
  border: none;
`

export const NotesItem = styles.p`
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  color: #100f10ff;
`
