---
sidebar_position: 3
title: Gas Leak Detection
---

This ML powered device smell diesel and send realtime notification on mobile. Using Wio terminal, Edge Impulse & Blynk.

![](https://hackster.imgix.net/uploads/attachments/1412712/_pEJAZLxsMf.blob?auto=compress%2Cformat&w=900&h=675&fit=min)

Oil tank leakage is serious problem. People living in cold weather like east coast of the USA, use diesel to heat up the house during winter. Most of the old houses have oil tank in their basements. Basement is a place where people usually don't visit everyday. So if there is any leakage in the oil tank, changes are that, they will be unnoticed. This can lead to serious damage including catching fire. Early detection of the leakage can prevent high repair cost as well as prevent any chances of fire.

![](https://hackster.imgix.net/uploads/attachments/1412714/img_1976_h07GozfU9c.jpg?auto=compress%2Cformat&w=740&h=555&fit=max)

![](https://hackster.imgix.net/uploads/attachments/1412569/img_1977_tdhOkA2fh0.jpg?auto=compress%2Cformat&w=740&h=555&fit=max)

Using technology we can sense the leakage and provide realtime notification to the owner. Using machine learning and multi channel gas sensor, a device can identify if there is any diesel or petrol in the air and alert.

![](https://hackster.imgix.net/uploads/attachments/1412708/img_5277_WCJHLc9UyW.jpg?auto=compress%2Cformat&w=740&h=555&fit=max)

I have designed "Gas Leak Detector" which is built on Seeed's Wio Terminal. It 's connected with Multichannel gas sensor and on Fan. I am running a tinyML model on the microcontroller to detect if there is any smell of diesel in the air. When diesel is detected, I am sending a push notification through Blynk app.

Check out the full project and instructions on [Hackster.io](https://www.hackster.io/mithun-das/oil-tank-leak-detection-using-tinyml-by-sashrika-29222f)