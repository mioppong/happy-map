import * as SecureStore from "expo-secure-store";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

export const getPhoneID = async () => {
  let fetchUUID = await SecureStore.getItemAsync("secure_deviceid");
  if (fetchUUID) {
    return fetchUUID;
  } else {
    let uuid = uuidv4();
    await SecureStore.setItemAsync("secure_deviceid", JSON.stringify(uuid));
    return fetchUUID;
  }
};
// export const getPhoneID = async () => {
//   let fetchUUID = await SecureStore.getItemAsync("secure_deviceid");
//   return fetchUUID;
// };
