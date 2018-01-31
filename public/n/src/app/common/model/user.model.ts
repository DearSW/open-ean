
// @用户结构模型
export class UserModel {
    constructor(
        public act: string,
        public pwd: string,
        public loginState: boolean,
        public actType: string
    ) {}
}
