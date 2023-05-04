radio.onReceivedNumber(function (receivedNumber) {
    colorbit_51bit.clear()
    Key = receivedNumber
    colorbit_51bit.showWhaleySansFontColor(Key, colorbit.colors(BitColors.Red), colorbit.colors(BitColors.Black))
    colorbit_51bit.show()
})
let Key = 0
let colorbit_51bit: colorbit.Strip = null
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.OBJECTCLASSIFICATION)
radio.setGroup(42)
colorbit_51bit = colorbit.initColorBit(DigitalPin.P8, BitColorMode.RGB)
colorbit_51bit.setBrightness(128)
colorbit_51bit.clear()
colorbit_51bit.show()
basic.showIcon(IconNames.Heart)
basic.forever(function () {
	
})
