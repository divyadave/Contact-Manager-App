import React from 'react'
import { Modal, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements'
import styles from './styles'



function AppModal({ modalVisible, modalBody, title, modalFooter, setModalVisible, closeOnTouchOutside }) {
    return (
        <Modal visible={modalVisible} transparent>
            <TouchableOpacity onPress={() => { if(closeOnTouchOutside) { setModalVisible(false) } }} style={styles.wrapper}>
                <View style={styles.modalView}>
                    <ScrollView>
                        <View style={styles.header}>
                            <Icon type="antdesign" name="close" size={17}></Icon>
                            <Text style={styles.title}>{title}</Text>
                            <View></View>
                            <View></View>
                            <View></View>
                            <View></View>
                            <View></View>
                            <View></View>
                            </View>
                            
                            <View style={styles.body}>{modalBody}</View>
                            {modalFooter}
                            {
                                !modalFooter && (
                                    <View>
                                        <>
                                            <View style={styles.footerSeparator} />
                                            <View style={styles.footerItems}>
                                                <View style={styles.footer}>
                                                    <Text style={styles.footerText}>Privacy Policy</Text>
                                                    <View style={styles.termsView} />
                                                    <Text style={styles.footerText}>Terms of Service</Text>
                                                </View>
                                            </View>
                                        </>
                                    </View>
                                )
                            }


                    </ScrollView>

                </View>

            </TouchableOpacity>

        </Modal>
    )
}

export default AppModal