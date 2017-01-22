'use strict'

import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

class Footer extends Component {
  render() {
    const { filter, count } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.texts}>
          <Text style={styles.count}>{count}</Text>
          <Text style={styles.text}> { count > 1 ? 'todos left' : 'todo left' }</Text>
        </View>
        <View style={styles.filters}>
          <TouchableOpacity style={[styles.filter, filter === 'ALL' && styles.selected]} onPress={() => this.props.onFilter('ALL')}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === 'ACTIVE' && styles.selected]} onPress={() => this.props.onFilter('ACTIVE')}>
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filter, filter === 'COMPLETED' && styles.selected]} onPress={() => this.props.onFilter('COMPLETED')}>
            <Text>Completed</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={this.props.onClearComplete}>
          <Text>Clear Completed</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  filters: {
    flexDirection: 'row'
  },
  filter: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  selected: {
    borderColor: 'rgba(175, 47, 47, .2)'
  },
  texts: {
    flexDirection: 'row'
  },
  text: {
    paddingTop: 5
  },
  count: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3e87e3'
  }
})

Footer.propTypes = {
  filter: React.PropTypes.string.isRequired,
  count: React.PropTypes.number.isRequired,
  onFilter: React.PropTypes.function.isRequired,
  onClearComplete: React.PropTypes.function.isRequired
}

export default Footer