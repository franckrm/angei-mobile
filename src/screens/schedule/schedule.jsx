import { Text, View } from "react-native";
import {styles} from "./schedule.style.js"
import {Calendar, LocaleConfig} from "react-native-calendars"
import { ptBR } from "../../constants/calendar.js";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Button from "../../components/button/button.jsx";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function Schedule(){

    const [selectedDate, setSelectedDate] = useState("");//new Date().toISOString().slice(0,10)
    const [selectedHours, setSelectedHours] = useState("");

    return <View style={styles.container}>
        <View>
            <Calendar theme={styles.theme}
                onDayPress={(day)=>{setSelectedDate(day.dateString) }}
                markedDates={{
                    [selectedDate] : {selected:true}
                }}

                minDate={new Date().toDateString()}
            />
            <View>
                <Text style={styles.textHour}>Horário</Text>
            </View>
            <View>
                <Picker selectedValue={selectedHours}
                    onValueChange={(itemValue, itemIndex)=> setSelectedHours(itemValue)}
                >
                    <Picker.Item label="09:00" value="09:00" />
                    <Picker.Item label="09:30" value="09:30" />
                    <Picker.Item label="10:00" value="10:00" />
                </Picker>
            </View>
        </View>
        <View>
            <Button text="Confirmar Reserva" />
        </View>
            
    </View>
}

export default Schedule;
