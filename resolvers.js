const Post = require("./Post");
const bcrypt = require("bcrypt");
//Resolvers

const getDefinedValues = (argument) => {
  const definedValue = {};
  for (const key in argument) {
    if (argument[key] != undefined && argument[key] != null) {
      Object.assign(definedValue, { [key]: argument[key] });
    }
  }
  return definedValue;
};
const resolvers = {
  Query: {
    hello: () => {
      return "Hello World";
    },
    getAllAccount: async () => {
      return await Post.find();
    },
  },
  Mutation: {
    createAccount: async (parent, args, context, info) => {
      let { password } = args.account;
      const {
        firstName,
        lastName,
        email,
        number,
        companyName,
        location,
        leftLat,
        rightLat,
        topLong,
        btmLong,
        radius,
        qual,
        industry,
        domain,
        skillset1,
        skillset2,
        skillset3,
        skillset4,
        exp,
        relevantExp,
        totalExp,
        currentPay,
        expectedPay,
        linkedIn,
        type,
      } = args.account;

      if (password !== null && password !== undefined) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        password = hashedPassword;
      }
      console.log(args.account);
      const post = await new Post({
        firstName,
        lastName,
        email,
        password,
        number,
        companyName,
        location,
        leftLat,
        rightLat,
        topLong,
        btmLong,
        radius,
        qual,
        industry,
        domain,
        skillset1,
        skillset2,
        skillset3,
        skillset4,
        exp,
        relevantExp,
        totalExp,
        currentPay,
        expectedPay,
        linkedIn,
        type,
      }).save();
      return post;
    },
    updateAccount: async (parent, args, context, info) => {
      const { id } = args;
      const definedValue = getDefinedValues(args.account);
      console.log(definedValue);
      try {
        const post = await Post.findByIdAndUpdate(id, definedValue, {
          new: true,
        });
        return post;
      } catch {
        console.log("failed");
      }
    },
    deleteAccount: async (parent, args, context, info) => {
      const { id } = args;
      await Post.findByIdAndDelete(id);
      return "Deleted";
    },
  },
};
module.exports = resolvers;
