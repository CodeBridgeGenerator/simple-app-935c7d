import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../services/restClient";
import _ from "lodash";
import initilization from "../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';

const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const ServicesettingsCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
          
            if (_.isEmpty(_entity?.ServerSettings)) {
                error["ServerSettings"] = `Server Settings field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.SecuritySettings)) {
                error["SecuritySettings"] = `Security Settings field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.PaymentSettings)) {
                error["PaymentSettings"] = `Payment Settings field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.AuthenticationSettings)) {
                error["AuthenticationSettings"] = `Authentication Settings field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.IntegrationSettings)) {
                error["IntegrationSettings"] = `Integration Settings field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.DatabaseSettings)) {
                error["DatabaseSettings"] = `Database Settings field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.PerformanceSettings)) {
                error["PerformanceSettings"] = `Performance Settings field is required`;
                ret = false;
            }
  
            if (_.isEmpty(_entity?.BackupSettings)) {
                error["BackupSettings"] = `Backup Settings field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            ProjectID: _entity?.ProjectID,NotficationSettings: _entity?.NotficationSettings,ServerSettings: _entity?.ServerSettings,SecuritySettings: _entity?.SecuritySettings,PaymentSettings: _entity?.PaymentSettings,AuthenticationSettings: _entity?.AuthenticationSettings,IntegrationSettings: _entity?.IntegrationSettings,DatabaseSettings: _entity?.DatabaseSettings,PerformanceSettings: _entity?.PerformanceSettings,BackupSettings: _entity?.BackupSettings,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("servicesettings").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Servicesettings created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.log("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Servicesettings" });
        }
        setLoading(false);
    };

    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Servicesettings" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "40vw" }} className="min-w-max" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="servicesettings-create-dialog-component">
            <div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="ProjectID">ProjectID:</label>
                <InputText id="ProjectID" className="w-full mb-3 p-inputtext-sm" value={_entity?.ProjectID} onChange={(e) => setValByKey("ProjectID", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ProjectID"]) ? (
              <p className="m-0" key="error-ProjectID">
                {error["ProjectID"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="NotficationSettings">Notfication Settings:</label>
                <InputText id="NotficationSettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.NotficationSettings} onChange={(e) => setValByKey("NotficationSettings", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["NotficationSettings"]) ? (
              <p className="m-0" key="error-NotficationSettings">
                {error["NotficationSettings"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="ServerSettings">Server Settings:</label>
                <InputText id="ServerSettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.ServerSettings} onChange={(e) => setValByKey("ServerSettings", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["ServerSettings"]) ? (
              <p className="m-0" key="error-ServerSettings">
                {error["ServerSettings"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="SecuritySettings">Security Settings:</label>
                <InputText id="SecuritySettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.SecuritySettings} onChange={(e) => setValByKey("SecuritySettings", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["SecuritySettings"]) ? (
              <p className="m-0" key="error-SecuritySettings">
                {error["SecuritySettings"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="PaymentSettings">Payment Settings:</label>
                <InputText id="PaymentSettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.PaymentSettings} onChange={(e) => setValByKey("PaymentSettings", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["PaymentSettings"]) ? (
              <p className="m-0" key="error-PaymentSettings">
                {error["PaymentSettings"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="AuthenticationSettings">Authentication Settings:</label>
                <InputText id="AuthenticationSettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.AuthenticationSettings} onChange={(e) => setValByKey("AuthenticationSettings", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["AuthenticationSettings"]) ? (
              <p className="m-0" key="error-AuthenticationSettings">
                {error["AuthenticationSettings"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="IntegrationSettings">Integration Settings:</label>
                <InputText id="IntegrationSettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.IntegrationSettings} onChange={(e) => setValByKey("IntegrationSettings", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["IntegrationSettings"]) ? (
              <p className="m-0" key="error-IntegrationSettings">
                {error["IntegrationSettings"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="DatabaseSettings">Database Settings:</label>
                <InputText id="DatabaseSettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.DatabaseSettings} onChange={(e) => setValByKey("DatabaseSettings", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["DatabaseSettings"]) ? (
              <p className="m-0" key="error-DatabaseSettings">
                {error["DatabaseSettings"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="PerformanceSettings">Performance Settings:</label>
                <InputText id="PerformanceSettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.PerformanceSettings} onChange={(e) => setValByKey("PerformanceSettings", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["PerformanceSettings"]) ? (
              <p className="m-0" key="error-PerformanceSettings">
                {error["PerformanceSettings"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field mt-5">
            <span className="align-items-center">
                <label htmlFor="BackupSettings">Backup Settings:</label>
                <InputText id="BackupSettings" className="w-full mb-3 p-inputtext-sm" value={_entity?.BackupSettings} onChange={(e) => setValByKey("BackupSettings", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["BackupSettings"]) ? (
              <p className="m-0" key="error-BackupSettings">
                {error["BackupSettings"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(ServicesettingsCreateDialogComponent);
