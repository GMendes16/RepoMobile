import React, { useEffect, useState } from "react";
import {Modal,Platform,View} from 'react-native';
import { style } from "./style";
import DateTimePicker from '@react-native-community/datetimepicker'


const CustomDateTime = ({type,onDateChange,show,setShow}) =>{
    const [date,setDate] = useState(new Date())

    useEffect(()=>{
        if(onDateChange){
            onDateChange(date)
        }

    },[date,onDateChange])

    const OnChange = (event, selectedDate)=>{
        const currentDate = selectedDate || date;
        setDate(currentDate);
        setShow(false);

    }

    return (
        <Modal
        transparent={true}
        visible={show }
        onRequestClose={()=>setShow(false)}
        >   
          <View style={style.modalOverLay}>
            <View style={[
                style.container,
                Platform.OS == 'android'&&{backgroundColor:'transparent'}
                ]}>
                <DateTimePicker 
                value={date}
                mode={type}
                display={Platform.OS === 'ios'?'inline':'default'}
                onChange={OnChange}
                />
            </View>
            </View> 

            
        </Modal>
    )
    
}
export default CustomDateTime