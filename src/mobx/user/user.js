import { observable, action, computed } from "mobx";
import moment from "moment";

class UserStore {
  constructor() {
    let res = localStorage.getItem("USER");
    if (res) {
      let obj = JSON.parse(res);
      if (moment(obj.expire).format() >= moment().format()) {
        this.auth = true;
        this.name = obj.name;
        this.lastname = obj.lastname;
        this.role = obj.role;
        this.picture = obj.picture;
        this.user_id = obj.user_id;
        this.username = obj.username;
        this.expire = obj.expire;
      }
    }
  }

  @observable auth = false;
  @observable name = "";
  @observable lastname = "";
  @observable role = "";
  @observable picture = "";
  @observable user_id = "";
  @observable username = "";
  @observable noti_token = "";
  @observable expire = null;

  @action login(obj) {
    obj.expire = moment().add(8, "hours");
    this.auth = true;
    this.name = obj.name;
    this.lastname = obj.lastname;
    this.role = obj.role;
    this.picture = obj.picture;
    this.user_id = obj.user_id;
    this.username = obj.username;
    this.noti_token = obj.noti_token;
    this.expire = obj.expire;
    localStorage.setItem("USER", JSON.stringify(obj));
  }

  @action logout() {
    this.auth = false;
    this.name = "";
    this.lastname = "";
    this.role = "";
    this.picture = "";
    this.user_id = "";
    this.username = "";
    this.noti_token = "";
    this.expire = null;
    localStorage.removeItem("USER");
  }

  @action
  getFullname() {
    return `${this.name} ${this.lastname}`;
  }

  @action
  getRole() {
    return this.role === "admin"
      ? "แอดมิน"
      : this.role === "frontPT"
      ? "ฟ้อนท์กายภาพ"
      : this.role === "frontMT"
      ? "ฟ้อนท์เทคนิคการแพทย์"
      : this.role === "pt"
      ? "นักกายภาพ"
      : this.role === "mt"
      ? "นักเทคนิคการแพทย์"
      : this.role === "marketing"
      ? "การตลาด"
      : null;
  }

  @action
  setUsername(username) {
    this.username = username;
  }

  @computed
  get getUsername() {
    return this.username;
  }
}

export default new UserStore();
