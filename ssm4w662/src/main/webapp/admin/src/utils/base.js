const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm4w662/",
            name: "ssm4w662",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm4w662/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "宠物店系统"
        } 
    }
}
export default base
