export const userLogin = async (userLoginData: UserLoginDataType) => {
  const res = new Promise((resolve, reject) => {
    resolve({
      code: 200,
      result:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZW1haWwuY29tIiwidXNlcl9pZCI6IjYyNmU1ODQ0Yzg5NDhjYjQ5ZGE2NjBkZiIsImlhdCI6MTY1MTM5ODgwNCwiZXhwIjoxNjU2NTgyODA0fQ.h-EsvIdBTe58eFQKGmN81PYI09Zhb5Lf6hbo8JEHYHY",
      type: "OK",
      message: "Login Success",
    });
  });
  return res;
};
