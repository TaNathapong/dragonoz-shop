// export const _ip = "http://localhost:3053";
// export const _ip = 'http://10.170.21.170:3053';
export const _ip = 'https://ptmt.projectsoft.co.th';
export const ip = _ip + "/api/v1/";

export const GET = path => {
  return new Promise((resolve, reject) => {
    fetch(ip + path, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

export const POST = (path, obj, formData) => {
  return new Promise((resolve, reject) => {
    fetch(ip + path, {
      method: "POST",
      headers: formData
        ? {}
        : {
            "Content-Type": "application/json"
          },
      body: formData ? obj : JSON.stringify(obj),
      credentials: "include"
    })
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(err => reject(err));
  });
};

// -------------------- URL API -----------------------

export const LOGIN = "user/login";
//  -------- Home --------
export const GET_LIST = (type, date) => `get_list/${type}/${date}`;
export const GET_USERS = id => `user/detail/${id}`;
export const GET_ROLE = "get_role";
export const GET_UNIT = "get_unit";
export const GET_TYPE = "get_type";
export const GET_STATUS = "get_status";

//  -------- AddCustomer --------
export const GET_TREATMENT = id => `get_treatment/${id}`;
export const GET_PACKAGE = id => `get_package/${id}`;
export const CREATE_LIST_BY_FRONT = type => `create_list_by_front/${type}`;
export const CREATE_COMPANY_LIST_BY_FRONT = type => `create_company_list_by_front/${type}`;
export const CREATE_DELIVERY_LIST_BY_FRONT = type => `create_delivery_list_by_front/${type}`;
export const CREATE_COMPANY_DELIVERY_LIST_BY_FRONT = type => `create_company_delivery_list_by_front/${type}`;
export const UPDATE_LIST_BY_FRONT = id => `update_list_by_front/${id}`;
export const DONE_LIST_BY_DOCTOR = id => `done_list_by_doctor/${id}`;
export const GET_LIST_BY_ID = id => `get_list_by_id/${id}`;
export const CANCEL_LIST = id => `cancel_list/${id}`;
export const COMFIRM_CUSTOMER = (id, hn) => `user/confirm_customer/${id}/${hn}`;
export const CREATE_USER = "user/create_user";
export const GET_CLAIM = id => `get_claim/${id}`;
export const GET_PICTURE = id => `user/avatar/${id}`;
export const GET_USER_DETAIL = id => `user/detail/${id}`;
export const GET_BED = "get_bed";
export const GET_BOOKING = (type, date) => `get_booking/${type}/${date}`;
export const UPDATE_PROFILE = "user/update_profile";
export const UPDATE_USER_PROFILE = "user/update_user_profile";
export const DELETE_USER = id => `user/delete_customer/${id}`;

//  -------- Customer History --------
export const GET_CUSTOMER_HISTORY = (id, type, date) => `get_customer_history/${id}/${type}/${date}`;

//  -------- Marketing --------
export const GET_BANNER = id => `get_banner/${id}`;
export const GET_BANNER_PIC = id => `${ip}banner/${id}`;
export const EDIT_BANNER = "update_banner";
export const CREATE_BANNER = "create_banner";
export const REMOVE_BANNER = id => `delete_banner/${id}`;

//--------------- Graph ------------------
export const GET_DATE_INCOME = (claim = "all", date) => `get_date_income/${claim}/${date}`;
export const GET_MONTH_INCOME = (claim = "all", month) => `get_month_income/${claim}/${month}`;
export const GET_YEAR_INCOME = (claim = "all", year) => `get_year_income/${claim}/${year}`;

//--------------- Notify ------------------

export const UPDATE_NOTIFY = (user, id) => `update_notify/${user}/${id}`;

//--------------- Update Result ------------------
export const UPDATE_RESULT = "upload_result";
export const GET_RESULT = (type = "all", date) => `get_result/${type}/${date}`;
export const APPROVE_RESULT = result_id => `approve_result/${result_id}`;
