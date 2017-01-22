'use strict'

import React, { Component } from 'react'
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput } from 'react-native'

class Row extends Component {
  render() {
    const { complete } = this.props

    const doneButton = (
      <TouchableOpacity style={styles.done} onPress={() => this.props.onToggleEdit(false)}>
        <Text style={styles.doneText}>Save</Text>
      </TouchableOpacity>
    )

    const editingComponent = (
      <View style={styles.textWrap}>
        <TextInput
          autoFocus
          multiline
          onChangeText={this.props.onUpdate}
          style={styles.input}
          value={this.props.text}
        />
      </View>
    )

    const removeButton = (
      <TouchableOpacity onPress={this.props.onRemove}>
        <Text style={styles.destroy}>X</Text>
      </TouchableOpacity>
    )

    const textComponent = (
      <TouchableOpacity style={styles.textWrap} onLongPress={() => this.props.onToggleEdit(true)}>
        <Text style={[styles.text, complete && styles.complete]}>{this.props.text}</Text>
      </TouchableOpacity>
    )

    return (
      <View style={styles.container}>
        <Switch
          value={complete}
          onValueChange={this.props.onComplete}
        />
        {this.props.editing ? editingComponent : textComponent}
        {this.props.editing ? doneButton : removeButton}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  input: {
    height: 100,
    flex: 1,
    fontSize: 24,
    padding: 0,
    color: '#4d4d4d'
  },
  textWrap: {
    flex: 1,
    marginHorizontal: 10
  },
  text: {
    fontSize: 24,
    color: '#4d4d4d'
  },
  complete: {
    textDecorationLine: 'line-through'
  },
  destroy: {
    fontSize: 20,
    color: '#cc9a9a'
  },
  done: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#7be290',
    padding: 7
  },
  doneText: {
    color: '#4d4d4d',
    fontSize: 20
  }
})

Row.propTypes = {
  complete: React.PropTypes.boolean.isRequired,
  editing: React.PropTypes.boolean.isRequired,
  text: React.PropTypes.string.isRequired,
  onComplete: React.PropTypes.function.isRequired,
  onRemove: React.PropTypes.function.isRequired,
  onUpdate: React.PropTypes.function.isRequired,
  onToggleEdit: React.PropTypes.function.isRequired
}

export default Row