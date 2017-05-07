// This file exists for two purposes:
// 1. Ensure that both ios and android files present identical types to importers.
// 2. Allow consumers to import the module as if typescript understood react-native suffixes.
import DefaultIos from './Sensors.ios';
import * as ios from './Sensors.ios';
import DefaultAndroid from './Sensors.android';
import * as android from './Sensors.android';

declare var _test: typeof ios;
declare var _test: typeof android;

declare var _testDefault: typeof DefaultIos;
declare var _testDefault: typeof DefaultAndroid;

export * from './Sensors.ios';
export default DefaultIos;