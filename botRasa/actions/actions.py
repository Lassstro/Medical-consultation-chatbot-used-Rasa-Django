import pandas as pd

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet, FollowupAction
import time

from actions.trich_xuat_thong_tin import get_data_from_serial, xu_li_the_bhyt

class TrichThongTin(Action):
    def name(self) -> Text:
        return "action_mo_module_trich_xuat"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        dispatcher.utter_message(text = '...')
        return []

class TrichThongTin(Action):
    def name(self) -> Text:
        return "action_trich_xuat_thong_tin"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
    
        data = get_data_from_serial('COM3')
        info = xu_li_the_bhyt(data)
        form_bhyt = f"Trích xuất thành công, hãy xác nhận thông tin: Mã thẻ BHYT: {info['ma_so_BHYT']}, Họ và tên: {info['ho_ten']}, Ngày sinh: {info['ngay_sinh']}, Giới tính: {info['gioi_tinh']}, Địa chỉ: {info['dia_chi']}"
        dispatcher.utter_message(text = form_bhyt)
        
        return form_bhyt
