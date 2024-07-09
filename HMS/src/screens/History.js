import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const mockBookingData = {
    '1': [
        { roomNumber: '101', date: '2023-06-01' },
        { roomNumber: '102', date: '2023-06-05' },
        { roomNumber: '101', date: '2023-06-10' },
        { roomNumber: '103', date: '2023-06-15' },
        { roomNumber: '101', date: '2023-06-20' },
    ],
    '2': [
        { roomNumber: '201', date: '2023-07-01' },
        { roomNumber: '202', date: '2023-07-05' },
        { roomNumber: '201', date: '2023-07-10' },
        { roomNumber: '203', date: '2023-07-15' },
        { roomNumber: '201', date: '2023-07-20' },
    ],
    '3': [
        { roomNumber: '301', date: '2023-08-01' },
        { roomNumber: '302', date: '2023-08-05' },
        { roomNumber: '301', date: '2023-08-10' },
        { roomNumber: '303', date: '2023-08-15' },
        { roomNumber: '301', date: '2023-08-20' },
    ],
    '4': [
        { roomNumber: '301', date: '2023-08-01' },
        { roomNumber: '303', date: '2023-08-05' },
        { roomNumber: '303', date: '2023-08-10' },
        { roomNumber: '303', date: '2023-08-15' },
        { roomNumber: '301', date: '2023-08-20' },
    ],
};

const getMostBookedRoom = (bookings) => {
    const roomCount = {};
    bookings.forEach(booking => {
        roomCount[booking.roomNumber] = (roomCount[booking.roomNumber] || 0) + 1;
    });
    return Object.keys(roomCount).reduce((a, b) => roomCount[a] > roomCount[b] ? a : b);
};

const History = ({ route }) => {
    const { customer } = route.params;
    const bookings = mockBookingData[customer.id] || [];
    const mostBookedRoom = getMostBookedRoom(bookings);

    const handleBook = () => {
        console.log('Booking room for:', customer.name);
        // Add booking logic here
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.card}>
                    <Text style={styles.title}>{customer.name}</Text>
                    <Text style={styles.details}>Phone: {customer.phone}</Text>
                    <Text style={styles.details}>Most Booked Room: {mostBookedRoom}</Text>
                    <Text style={styles.details}>Previous Bookings:</Text>
                    {bookings.map((booking, index) => (
                        <Text key={index} style={styles.details}>
                            Room {booking.roomNumber} on {booking.date}
                        </Text>
                    ))}
                    <TouchableOpacity style={styles.button} onPress={handleBook}>
                        <Text style={styles.buttonText}>Book</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        width: '90%',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    details: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'green',
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default History;
