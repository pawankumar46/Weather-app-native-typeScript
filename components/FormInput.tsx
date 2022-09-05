import React ,{useState, useEffect} from 'react'
import { View , Text, TextInput , StyleSheet, Button , Image, ScrollView} from 'react-native';
import axios from 'axios'
import Details from './Details';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from './Container';



const FormInput = ({ navigation}: NativeStackScreenProps<RootParamList, 'InputForm'> ) => {
     const [country , setCountry] = useState('')
   //  const [data , setData] = useState([])
    //  const [capital , setCapital] = useState('')
     
   
       //       let cap = result.map((ele : any)=> ele.capital)
      //        let population = result.map((ele : any)=> ele.population)
      //        let long = result.map((ele : any)=> ele.capitalInfo.latlng[0])
      //        let lng = result.map((ele : any)=> ele.capitalInfo.latlng[1])
      //        let flag = result.map((ele: any)=>ele.flags.png)
   
     
     
     
     const handlePress  = () => {
      axios.get(`https://restcountries.com/v3.1/name/${country}`)
      .then((res)=>{
          const result = res.data

         // setData(result) 
          let cap = result.map((ele : any)=> ele.capital)
          let population = result.map((ele : any)=> ele.population)
          let long = result.map((ele : any)=> ele.capitalInfo.latlng[0])
          let lng = result.map((ele : any)=> ele.capitalInfo.latlng[1])
          let flag = result.map((ele: any)=>ele.flags.png)

          navigation.navigate( 'Details',{
            cap: cap[0],
            population : population,
            long : long ,
            lng : lng ,
            flag : flag[0]
            
          })
          
      })
      .catch((err)=>{
          alert(err.message)

      })
      }
       
      // const handlePress  = () => {
      //    axios.get(`https://restcountries.com/v3.1/name/${country}`)
      //    .then((res)=>{
      //        const result = res.data
         //       setData(result) 
         //     })
         // .catch((err)=>{
         //     alert(err.message)
         // })

         //  setTimeout(()=>{
         //    navigation.navigate( 'Details',{
         //       cap: cap[0],
         //       population : population,
         //       long : long ,
         //       lng : lng ,
         //       flag : flag[0]
               
         //     })
         //  },3000)
         // }

    //   const handleCapital=(data : string )=>{
    //       setCapital(data)
    //       alert(`your capital is ${capital}`)
         
    //   }
    
  return (
     <ScrollView>
    <View style={Styles.container}>
               
             <View style={Styles.input}>
             <TextInput placeholder='Search..' value={country} onChangeText={(val)=>setCountry(val)} />
             </View>
             <View style={Styles.button}>
                <Button disabled={country.length===0} title="Submit" color='#7a42f4' onPress={handlePress}></Button>
             </View>
              <View>
                 {/* {data.map((ele : any )=>{
                  
                    return (
                        
                        <Details key={ele.capital} capital ={ele.capital[0]}  flags={ele.flags.png}  population={ele.population} lat={ele.capitalInfo.latlng[0]}
                          lng={ele.capitalInfo.latlng[1]}/>
                    )
                 })} */}
                
              </View>
              
    </View> 
   </ScrollView> 
  )
}

const Styles = StyleSheet.create({
     container : {
        paddingTop : 80,
        textAlign : 'center',
        marginLeft : 80
     },
     input : {
        marginTop : 200,
        padding : 10,
        borderWidth : 1,
        width : 250,
        borderRadius : 8,
    

     },
     button : {
         paddingTop : 60,
         width : 100,
         marginLeft : 70,
         borderRadius : 7
        } ,
    //  text1 : {
    //     padding : 20,
    //     marginLeft : 30
    //    },
    //    flag : {
    //     margin : 40,
    //      height : 120,
    //      width  : 160,
    //      marginLeft : 40
    //    },
    //    word : {
    //     fontSize : 15,
    //     fontWeight: 'bold',
    //     margin : 4
    //    },
    //    scroll : {
    //      maxHeight : 400
    //    },
    //    capitalBtn: {
    //       width: 150,
    //       marginLeft : 50,

    //    }    
})
export default FormInput