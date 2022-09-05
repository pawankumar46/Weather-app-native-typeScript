import React ,{useState } from 'react'
import {View , Text ,Image , StyleSheet, Button, ScrollView} from 'react-native'
import axios from 'axios'
import Weather from './Weather'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootParamList } from './Container'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'

// const key1 : any = 0e0eb620c4908d7ec0aaf255118dc362
 //const key2 : any = c9749b9bde72adf4743f67678229e5e8
 
const Details = ({ route, navigation}: NativeStackScreenProps<RootParamList, 'Details'>) => {
     

   //const route = useRoute()
    console.log( 'details',route.params)
  
      

    // const [weather ,setWeather] = useState({
    //      name : '',
    //      temp : '',
    //      wind : '',
    //      precipitation : '',
    //      icon : 'loading'
    // })
    

     const handleCapital=(capital : any)=>{
         axios.get(`http://api.weatherstack.com/current?access_key=c9749b9bde72adf4743f67678229e5e8&query=${capital}`)
           .then((res)=>{
             const result = res.data
              
             navigation.navigate('Capital',{
                  name : result.location.name,
                  temp : result.current.temperature,
                  wind : result.current.wind_speed,
                  precipitation : result.current.precip,
                  icon : result.current.weather_icons[0]
               })
               
              
              //   name : weather.name ,
              //   temp : weather.temp,
              //   wind : weather.wind,
              //   precipitation : weather.precipitation,
              //   icon : weather.icon
              // })
             
              })
          .catch((err)=>{
            alert(err.message)
          })
              
           
       }
    //    console.log(weather)
  return (
   <SafeAreaView>
      <ScrollView>
    <View> 
          <Text style ={styles.text2}>Country Details</Text>
        <View>
     <Image style={styles.flag}  source={{uri : route.params?.flag}}  />
     </View>  
     
                                  <View style={styles.text1}>
                                     <Text style={styles.word}>Capital :-{route.params?.cap}</Text>
                                      <Text  style={styles.word}>Total Population :- {route.params?.population}</Text> 
                                     <Text  style={styles.word}>lat :  {route.params?.long}</Text>
                                     <Text  style={styles.word}>lng :  {route.params?.lng}</Text>
                                   </View>
                                   <View style={styles.capitalBtn}>
                                    <Button title='Capital Weather' onPress={()=>handleCapital(route.params?.cap)}></Button>
                                   </View>
                  <View>
                     {/* {Object.values(weather).map((ele : any)=>{
                         return (
                            <Weather key={ele.name} {...ele} />
                         )
                     })} */}
                     
                    
                  </View>            
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    text2 : {
         fontWeight : 'bold',
         fontSize : 25,
        marginTop : 10,
        marginLeft : 35
    },
    flag : {
        margin : 30,
         height : 120,
         width  : 200,
         marginLeft : 20
    },
    text1 : {
        padding : 20,
        marginLeft : 30
       },
       word : {
        fontSize : 15,
        fontWeight: 'bold',
        margin : 4
       },
       capitalBtn: {
        width: 150,
        marginLeft : 50,

     } 
})

export default Details