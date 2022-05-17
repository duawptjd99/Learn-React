const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); //액션 타입으로 로그 그룹화
  console.log("previous state", store.getState());
  console.log("action", action);
  next(action);
  console.log("next state", store.getState());
  console.groupEnd();
};

export default loggerMiddleware;

/* function 키워드로 기본구조를 작성
const loggerMiddleware = function loggerMiddleware(store) {
    return function(next){
        return function(action){
            //미들웨어 기본구조
      };
    };
};

*/
