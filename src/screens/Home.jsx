import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import React from 'react';

const screenWidth = Dimensions.get('window').width;
const chartWidth = screenWidth * 0.8;

const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
      }}
    >
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
        Bezier Line Chart
      </Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={screenWidth * 0.9}
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#4C1D95',

          // Gradient Colors
          backgroundGradientFrom: '#0F172A',
          backgroundGradientTo: '#7E22CE',

          decimalPlaces: 2,

          // Line + Label Colors
          color: (opacity = 1) => `rgba(216, 180, 254, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255,255,255,${opacity})`,

          style: {
            borderRadius: 20,
          },

          // Dots Style
          propsForDots: {
            r: '6',
            strokeWidth: '3',
            stroke: '#C084FC',
            fill: '#E9D5FF',
          },

          // Optional Grid Lines
          propsForBackgroundLines: {
            stroke: 'rgba(255,255,255,0.08)',
          },
        }}
        bezier
        style={{
          marginVertical: 10,
          borderRadius: 20,

          // Glassmorphism Feel
          shadowColor: '#7E22CE',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.4,
          shadowRadius: 20,
          elevation: 10,
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
