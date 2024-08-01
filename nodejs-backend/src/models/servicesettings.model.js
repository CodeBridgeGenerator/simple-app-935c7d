
    module.exports = function (app) {
        const modelName = 'servicesettings';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            ProjectID: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 150, index: true, trim: true },
NotficationSettings: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 2, maxLength: 150, index: true, trim: true },
ServerSettings: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
SecuritySettings: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
PaymentSettings: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
AuthenticationSettings: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
IntegrationSettings: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
DatabaseSettings: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
PerformanceSettings: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
BackupSettings: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };