import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

export default function CardBody({ children, ...props }) {
  return (
    <ScrollView>
      <View style={styles.body} {...props}>
        {children}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
})
