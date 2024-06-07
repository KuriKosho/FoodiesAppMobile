import { Modal, Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect,  useState } from 'react'
import { useCustomNavigation } from '@/utils/method/useCustomNavigation';
import clientService from '@/service/client.service';
import DynamicIcon from '@/components/UI/Icon/DynamicIcon';
import ButtonSmall from '@/components/UI/Button/ButtonSmall';
import Slider from '@react-native-community/slider';
import ButtonSelect from '@/components/UI/Button/ButtonSelect';

const categories = [
    { id: 1, name: 'Breakfast' },
    { id: 2, name: 'Lunch' },
    { id: 3, name: 'Dinner' },
    { id: 4, name: 'Dessert' },
    { id: 5, name: 'Snack' },
    { id: 6, name: 'Drink' },
    { id: 7, name: 'Other' },
]
const ingredients = [
    { id: 1, name: 'Salt' },
    { id: 2, name: 'Sugar' },
    { id: 3, name: 'Pepper' },
    { id: 4, name: 'Chili' },
    { id: 5, name: 'Garlic' },
    { id: 6, name: 'Onion' },
    { id: 7, name: 'Carrot' },
    { id: 8, name: 'Cabbage' },
    { id: 9, name: 'Tomato' },
]

const CreatePostScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalIngredientVisible, setModalIngredientVisible] = useState(false);

    const navi = useCustomNavigation();
    const [img, setImg] = useState(null);
    const [name, setName] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [time, setTime] = useState(5);
    const [level, setLevel] = useState('Easy');
    const [listCategories, setListCategories] = useState([]);
    const [listIngredients, setListIngredients] = useState([]);
    useEffect(() => {
        const fetchProfile = async () => {
            const profile = await clientService.getUserProfile();
            if (profile) {
                // setName(profile.name);
                // setImg(profile.img);
                setName("Jessica")
                setImg("https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48.jpg");
            } else {
                setName("Jessica")
                setImg("https://product.hstatic.net/200000325223/product/z2448801510183_2263357c23ba80c433204bcdc0cb2d19_056f2c250f0d4ab699b11e67dc809b48.jpg");
            }
        };
        fetchProfile();
    }, [])
    const selectImageHandler = async () => {
        console.log("Select Image");
    }
    const addCategory = (item) => {
      console.log(item);
        const index = listCategories.indexOf(item);
        if (index > -1) {
            setListCategories(listCategories.filter((category) => category !== item));
        } else {
            setListCategories([...listCategories, item]);
        }
    }
    const addCategoriesHandler = async () => {
        console.log("Send categories to server");
        console.log(listCategories);
        setModalVisible(!modalVisible);
    }
    const addIngredient = (item) => {
        console.log(item);
        const index = listIngredients.indexOf(item);
        if (index > -1) {
            setListIngredients(listIngredients.filter((ingredient) => ingredient !== item));
        } else {
            setListIngredients([...listIngredients, item]);
        }
    }
    const addIngredientsHandler = async () => {
        console.log("Send ingredients to server");
        console.log(listIngredients);
        setModalIngredientVisible(!modalIngredientVisible);
    }
  return (
    <>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalIngredientVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalIngredientVisible(!modalIngredientVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerModel}>
                <View>
                    <Text style={styles.modalText}>Ingredients</Text>
                </View>
                <Pressable style={{marginTop: -10}} onPress={() => setModalIngredientVisible(!modalIngredientVisible)}>
                    <DynamicIcon  name={"close"} size={25} color={"#000000"} library={"AntDesign"}/>
                </Pressable>
            </View>
            <View>
                {ingredients.map((ingredient,index) => {
                  if (listIngredients.includes(ingredient)) {
                    return (
                        <ButtonSelect key={index} name={ingredient.name} isFocus={true} action={() => addIngredient(ingredient)} /> 
                    )
                  } else {
                    return (
                        <ButtonSelect key={index} name={ingredient.name} action={() => addIngredient(ingredient)} /> 
                    )
                  }
                }
                )}
                </View>
            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => addIngredientsHandler()}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
            </View>
            </View>
      </Modal>
    </View>
  <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.headerModel}>
                <View>
                    <Text style={styles.modalText}>Categories</Text>
                </View>
                <Pressable style={{marginTop: -10}} onPress={() => setModalVisible(!modalVisible)}>
                    <DynamicIcon  name={"close"} size={25} color={"#000000"} library={"AntDesign"}/>
                </Pressable>
            </View>
            <View>
                {categories.map((category,index) => {
                  if (listCategories.includes(category)) {
                    return (
                        <ButtonSelect key={index} name={category.name} isFocus={true} action={() => addCategory(category)} /> 
                    )
                  } else {
                    return (
                        <ButtonSelect key={index} name={category.name} action={() => addCategory(category)} /> 
                    )
                  }
                }
                )}
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => addCategoriesHandler()}>
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
    <View style={styles.container}>

        <View style={styles.mergeContainer}>
            <View style={styles.headerContainer}>
                <View>
                    <Image source={{ uri: img }} style={{ width: 50, height: 50, borderRadius: 25 }} />
                </View>
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "500" }}>{name}</Text>
                    </View>
                    <Pressable onPress={()=> selectImageHandler()}>
                        <DynamicIcon name={"images"} size={22} color={"#343434"} library={"Entypo"}/>
                    </Pressable>
                </View>
            </View>   
            <ScrollView style={styles.bodyContainer}>
                    <TextInput placeholder='Tiêu đề' style={{ fontSize: 18, fontWeight: "500", color:"#000000" }} value={title} onChangeText={(text)=> setTitle(text) }/>
                    <Text style={{ fontSize: 16, fontWeight: "500" }}>Mô tả</Text>
                    <TextInput multiline placeholder='Bước 1:....' style={styles.input} value={description} onChangeText={(text)=> setDescription(text)}/>
            </ScrollView>
        </View>
        <View style={styles.line}></View>
        <View>
            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.label}>Thời gian: </Text>
                <View style={styles.timeContainer}>
                    <Slider
                        style={styles.slider}
                        minimumValue={0}
                        maximumValue={180}
                        step={5}
                        value={time}
                        onValueChange={setTime}
                        minimumTrackTintColor="#ff0000"
                        maximumTrackTintColor="#000000"
                        />
                    <Text style={styles.timeValue}>{time} min</Text>
                </View>
            </View>
          <View style={styles.levelContainer}>
              <Text style={styles.label}>Mức độ:</Text>
              <TouchableOpacity
              style={[styles.levelButton, level === 'Easy' && styles.selectedButton]}
              onPress={() => setLevel('Easy')}
              >
              <Text style={styles.buttonText}>Easy</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={[styles.levelButton, level === 'Medium' && styles.selectedButton]}
              onPress={() => setLevel('Medium')}
              >
              <Text style={styles.buttonText}>Medium</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={[styles.levelButton, level === 'Hard' && styles.selectedButton]}
              onPress={() => setLevel('Hard')}
              >
              <Text style={styles.buttonText}>Hard</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.normalContainer}>

            <View style={styles.categoryContainer}>
                <Text style={styles.label}>Thể loại:</Text>
            </View>

            <ScrollView style={styles.horizontallContainer} horizontal>
              {listCategories.map((category,index) => (
                  <View key={index} style={styles.horizontalItem}>
                      <Text>{category.name}</Text>
                  </View>
              ))}
            </ScrollView>

            <View>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.normalContainer}>
            <View style={styles.ingredientContainer}>
                <Text style={styles.label}>Nguyên liệu:</Text>
                
            </View>
            <ScrollView style={styles.horizontallContainer} horizontal>
              {listIngredients.map((ingredient,index) => (
                  <View key={index} style={styles.horizontalItem}>
                      <Text>{ingredient.name}</Text>
                  </View>
              ))}
            </ScrollView>
            <View style={{marginBottom: 10}}>
                <TouchableOpacity style={styles.addButton} onPress={()=> setModalIngredientVisible(true)}>
                  <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.footerContainer}>
            <ButtonSmall boder={false} text={"Post"}  />
        </View>
        <View>

        </View>
    </View>
    </>
    
  )
}

export default CreatePostScreen

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "100%",
        height: "100%",
        position: "relative",
    },
    mergeContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        width: "100%"
    },
    bodyContainer: {
        display: "flex",
        flexDirection: "column",
        // justifyContent: "flex-start",
        // alignItems: "center",
        marginTop: 15,
        columnGap: 10,
        width: "100%",
        // flex:1
    },  
    headerContainer:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        columnGap: 10,
        // flex: 1,
    },
    footerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    titleContainer: {
        display: "flex",
        flex:1,
        // marginRight: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    input: {
        fontSize: 16, 
        fontWeight: "500", 
        color:"#000000" ,
        height: "100%",
        borderColor: 'gray',
        paddingVertical: 4,
        textAlign:"justify",
        textAlignVertical: 'top', // for multiline text input to start at the top
      },
      line: {
        height: 1,
        width: "100%",
        backgroundColor: "#000000",
        marginVertical: 10,
      },
      timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        flex: 1,
      },
      label: {
        fontSize: 16,
        marginRight: 8,
      },
      slider: {
        flex: 1,
      },
      timeValue: {
        fontSize: 16,
        marginLeft: 8,
      },
      levelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      levelButton: {
        borderWidth: 1,
        borderColor: '#FF0000',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        marginHorizontal: 4,
      },
      selectedButton: {
        backgroundColor: '#dbdbdb',
      },
      buttonText: {
        color: '#000000',
        fontWeight: '500',
      },
      categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
      },
      addButton: {
        borderWidth: 1,
        borderColor: '#0000FF',
        borderRadius: 16,
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
      },
      addButtonText: {
        color: '#0000FF',
        fontSize: 16,
      },
      ingredientContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      headerModel: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      },
      centeredView: {
        flex: 1,
        justifyContent: 'center',
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        // alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        marginTop: 20,
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: '600',
      },
      btnTextSelect: {
        padding: 10,
        borderWidth: 1,
        borderColor: "#000000",
        marginVertical: 5,
        borderRadius: 5,
        textAlign: "center",
      },
      selectCircle:{
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#ff574b",
        position: "absolute",
        right: 10,
        top: 10,
      },
      horizontallContainer: {
        display: "flex",
        flex: 1,
        columnGap: 10,
        // width: "100%",
      },
      horizontalItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5,
        borderRadius: 10,
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "#ff574b",
      },
      normalContainer: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "flex-start",
        alignItems: "center",
        paddingBottom: 10,
      }
})