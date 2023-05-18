import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboardReducer from "../dashboard/dashboardReducer";
import tabReducer from "../common/tab/tabReducer";
import billingCyclesReducer from "../billingCycles/billingCyclesReducer";

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycles: billingCyclesReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer;