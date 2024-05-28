---
sidebar_position: 2
title: AEye The artificial eye for your kitchen
---

![](https://iamsashrika.link/_next/static/images/aeye-926687640b141843304856faacde40bf.jpg)

## Problems with stoves

One night, my mom had forgotten to turn the stove off after she was done cooking. The next morning, my dad had noticed that stove was on the whole night! Luckily, stove was on low , was nothing on the top and no damage was done, but something had to be done to prevent that from happening again. I had researched that one of the main way houses catch on fire is when the stove is left unattended when cooking or after cooking.

## How can my project help?

Using a thermal camera and machine learning, you can be able to see the heat radiations. Based on the machine learning, the device can identify if the stove has been left unattended and will notify you.

## My implementation is AEye

![](https://hackster.imgix.net/uploads/attachments/1470447/img_5757_cmkXjVE8TH.jpg?auto=compress%2Cformat&w=740&h=555&fit=max)

Here comes my device, "AEye". This device is built with Seeed Studio's Wio Terminal and is connected with a thermal camera and a LoRa Chassis. I am running a tinyml model on the wio terminal so that it can be able to determine whether the stove is on while no one is there. Without machine learning, we can determine if stove is on based on the heat data but taking a finer decision if stove is on and human is present or not, require lot of if-else logic in the code. Machine learning makes more sense in this situation. Then after it can be able to alert you to check the stove before any damage can happen.

See the rest of the project on [Hackster.io](https://www.hackster.io/mithun-das/smart-indoor-harvesting-using-wio-terminal-blynk-0da85d)