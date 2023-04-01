class Configuration {
  apiHost: string;

  constructor() {
    this.apiHost = process.env.NEXT_PUBLIC_API_HOST || "";
  }
}

const appConfig = new Configuration();
export default appConfig;
