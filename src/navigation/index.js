import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import * as screens from "../screens";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import config from "./config";
import {useSelector} from "react-redux";
import {getToken} from "../store/selectors/security";

const BottomTab = createBottomTabNavigator();

function Navigation() {
    let token = useSelector(getToken);

    if(!token) return <screens.Login />

    return (
        <NavigationContainer>
            <BottomTab.Navigator initialRouteName="schedule">
                <BottomTab.Screen name="schedule" component={screens.Schedule} options={config.schedule}/>
                <BottomTab.Screen name="day" component={screens.Day} options={config.day} />
                <BottomTab.Screen name="meeting" component={screens.Meeting} options={config.meeting} />
                <BottomTab.Screen name="addMeeting" component={screens.AddMeeting} options={config.addMeeting}/>
                <BottomTab.Screen name="editMeeting" component={screens.EditMeeting} options={config.editMeeting}/>

                <BottomTab.Screen name="clients" component={screens.Clients} options={config.clients} />
                <BottomTab.Screen name="addClient" component={screens.AddClient} options={config.addClient} />
                <BottomTab.Screen name="client" component={screens.Client} options={config.client} />
                <BottomTab.Screen name="editClient" component={screens.EditClient} options={config.editMeeting}/>
            </BottomTab.Navigator>
        </NavigationContainer>
    );
}
export default Navigation;