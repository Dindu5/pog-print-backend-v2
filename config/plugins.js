module.exports = ({ env }) => ({
  email: {
    config: {
      provider: "strapi-provider-email-mailjet", // For community providers pass the full package name (e.g. provider: 'strapi-provider-email-mandrill')
      providerOptions: {
        publicApiKey: env("MAILJET_PUBLIC_KEY"),
        secretApiKey: env("MAILJET_SECRET_KEY"),
      },
      settings: {
        defaultFrom: "chimdindue@gmail.com",
        defaultFromName: "Pog Print",
        defaultTo: "dindu696@gmail.com",
        defaultToName: "User",
      },
    },
  },
});
