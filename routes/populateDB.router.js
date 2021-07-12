const express = require('express');
const { Product } = require('../models/product.model');
const faker = require('faker');
const router = express.Router();

const products = [
    {
        name: 'Arduino Nano',
        price: 1599,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1625996981/ecommerce/Official-Arduino-Nano-3_copy_ovhdtu.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4,
        discount: 0,
        level: 'Advanced',
        category: 'Micro Controllers',
        description: [
            'Manufacturer: Arduino Officials',
            'Operating Voltage (logic level): 5V',
            '8 analog inputs ports: A0 ~ A7',
            '14 Digital input / output ports: TX, RX, D2 ~ D13',
            'Using Atmel Atmega328P-AU MCU',
        ],
    },
    {
        name: 'Arduino Uno',
        price: 1699,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1625997185/ecommerce/Arduino-Uno-Rev3-2_copy_po2mbb.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 5,
        discount: 0,
        level: 'Intermediate',
        category: 'Micro Controllers',
        description: [
            'Micro-controller : ATmega328P',
            'Operating Voltage: 5V',
            'Input Voltage (recommended) : 7-12V',
            'Digital I/O Pins: 14 (of which 6 provide PWM output',
        ],
    },
    {
        name: 'Arduino Edge Control',
        price: 20749,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1625997621/ecommerce/arduino-pro-edge-control-3_el6lcy.jpg',
        inStock: false,
        fastDelivery: false,
        ratings: 4.5,
        discount: 0,
        level: 'Advanced',
        category: 'Micro Controllers',
        description: [
            'Operating Supply Voltage: 12 V',
            'Dimensions: 104 mm x 86 mm',
            'interface Type: I2S, Serial, USB',
        ],
    },
    {
        name: 'Brushless DC Motor',
        price: 790,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1625997911/ecommerce/brushless_motor_asqaud.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4.7,
        discount: 0,
        level: 'Advanced',
        category: 'Motors',
        description: [
            '2312 920KV Brushless DC Motor for Drone',
            'Motor KV: 920 (RPM/V)',
            'No-Load Current (Io/10V): 0.45 Amps',
            'Motor Resistance (Rm): 0.117 Ohms',
            'Max Power: 220 Watts',
        ],
    },
    {
        name: 'TowerPro SG90 Servo Motor',
        price: 0,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1625998205/ecommerce/Micro-Servo-SG90-9G-Eletronic-Module-RC_tlm4xi.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4.5,
        discount: 0,
        level: 'Intermediate',
        category: 'Motors',
        description: [
            'Operating voltage: 3.0V~ 7.2V',
            'Stall torque @4.8V : 1.2kg-cm',
            'Weight: 9 gm',
        ],
    },
    {
        name: 'DC Motor',
        price: 158,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1625998670/ecommerce/robu-2_copy_xu4x1m.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4,
        discount: 0,
        level: 'Beginner',
        category: 'Motors',
        description: [
            'Operating Voltage(V): 12',
            'Rated Torque(kg-cm): 4.2',
            'Stall Torque(kg-cm): 16',
        ],
    },
    {
        name: '830 Points Breadboard',
        price: 149,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1625998844/ecommerce/Transparent-830-Points-Solderless-Breadboard-6_yut7db.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 5,
        discount: 0,
        level: 'Beginner',
        category: 'Essentials',
        description: [
            '830 Solder-less Points',
            'Accept a variety of wire sizes 20-29 AWG',
            'Colored coordinates for easy components placement',
        ],
    },
    {
        name: '25W Soldering Iron',
        price: 195,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1625999105/ecommerce/Noel-25W-Soldering-Iron-Platinum-2_zlnlt3.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4.5,
        discount: 0,
        level: 'Beginner',
        category: 'Essentials',
        description: ['High-Quality Nickel-Copper plated Bit', 'Power: 25W'],
    },
    {
        name: 'Jumper Wires',
        price: 70,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1626000865/ecommerce/40pcs-Dupont-Wire-Jumper-Cable_cwbwu8.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4,
        discount: 0,
        level: 'Beginner',
        category: 'Essentials',
        description: [
            'Male to Male jumper wires',
            '40P color DuPont line',
            'Compatible with 2.54mm spacing pin headers',
        ],
    },
    {
        name: '2Amp Motor Driver',
        price: 829,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1626001029/ecommerce/SHIELD-2AMOTOR2-800x800_m5veu0.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4.5,
        discount: 0,
        level: 'Intermediate',
        category: 'Motor Drivers',
        description: [
            'Logic control, 5V from Arduino main board',
            'Up to 2A current each channel',
            'Support PWM speed control',
            'Up to 2A current each channel',
        ],
    },
    {
        name: 'Raspberry Pi 4',
        price: 6749,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1626001173/ecommerce/Raspberry-Pi-4-Model-B-with-8-GB-RAM_r7hww8.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4.8,
        discount: 0,
        level: 'advanced',
        category: 'Micro Controllers',
        description: [
            'Quad-Core 64-bit Broadcom 2711, Cortex A72  Processor',
            'WLAN 802.11 b/g/n/ac (2,4 + 5,0 GHz)',
            'LAN RJ45 10/100/1000 Mbit (Gigabit LAN over USB 3.0)',
            'Operating Power 5V@3A  via USB Type-C Port',
        ],
    },
    {
        name: 'US-100 Ultrasonic Sensor',
        price: 419,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1626001492/ecommerce/ultrasonic-sensor_my6rk5.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4,
        discount: 0,
        level: 'Intermediate',
        category: 'Sensors',
        description: [
            'Voltage: DC 2.4V – 5V',
            'Average Current Consumption: < 2mA',
            'Output mode: level or UART',
            'Detection distance: 2cm – 450cm',
        ],
    },
    {
        name: 'IR Sensor Module',
        price: 35,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1626001691/ecommerce/IR-sensor-Module_sstq55.jpg',
        inStock: true,
        fastDelivery: true,
        ratings: 4,
        discount: 0,
        level: 'Intermediate',
        category: 'Sensors',
        description: [
            'Detection distance: 2 ~ 30cm',
            'Detection angle: 35 °',
            'Comparator chip: LM393',
            '3mm screw holes for easy mounting',
        ],
    },
    {
        name: 'Orange 3300mAh LiPo Battery',
        price: 2399,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1626001882/ecommerce/Orange-3300mAh-Lithium-Polymer-Battery_nnmi4w.jpg',
        inStock: false,
        fastDelivery: false,
        ratings: 5,
        discount: 0,
        level: 'Advanced',
        category: 'Batteries',
        description: [
            'Model No: ORANGE 3300/3S-25C',
            'Balance Plug : JST-XH',
            'Discharge Plug : XT-60',
            'Voltage : 11.1V',
            'Dimensions : 140 x 43 x 20(mm )',
        ],
    },
    {
        name: 'Orange Li-ion 2500mAh Battery',
        price: 0,
        image: 'https://res.cloudinary.com/achalsaharan/image/upload/v1626006415/ecommerce/LiOn_Battery_yqyzkp.jpg',
        inStock: true,
        fastDelivery: false,
        ratings: 4.5,
        discount: 0,
        level: 'Intermediate',
        category: 'Batteries',
        description: [
            'Maximum Output Voltage: 12.6 VDC',
            'Inbuilt (BMS) battery protection circuit',
            'Charging Port: 5.5mm DC  (Female)',
            'Discharge Port: 5.5mm DC  (Male)',
        ],
    },
];

router.get('/', async (req, res) => {
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const newProduct = new Product(product);
        await newProduct.save();
    }

    const allProducts = await Product.find({});
    res.json(allProducts);
});

module.exports = router;
