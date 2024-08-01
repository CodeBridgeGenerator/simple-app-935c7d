import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState, useRef } from 'react';
import _ from 'lodash';
import { Button } from 'primereact/button';
import { useParams } from "react-router-dom";
import moment from "moment";
import UploadService from "../../services/uploadService";
import { InputText } from 'primereact/inputtext';
import { Dialog } from "primereact/dialog";
import { MultiSelect } from "primereact/multiselect";
import DownloadCSV from "../../utils/DownloadCSV";

const ServicesettingsDataTable = ({ items, fields, onEditRow, onRowDelete, onRowClick, searchDialog, setSearchDialog,   showUpload, setShowUpload,
    showFilter, setShowFilter,
    showColumns, setShowColumns, onClickSaveFilteredfields ,
    selectedFilterFields, setSelectedFilterFields,
    selectedHideFields, setSelectedHideFields, onClickSaveHiddenfields, loading}) => {
    const dt = useRef(null);
    const urlParams = useParams();
    const [globalFilter, setGlobalFilter] = useState('');

const pTemplate0 = (rowData, { rowIndex }) => <p >{rowData.ProjectID}</p>
const pTemplate1 = (rowData, { rowIndex }) => <p >{rowData.NotficationSettings}</p>
const pTemplate2 = (rowData, { rowIndex }) => <p >{rowData.ServerSettings}</p>
const pTemplate3 = (rowData, { rowIndex }) => <p >{rowData.SecuritySettings}</p>
const pTemplate4 = (rowData, { rowIndex }) => <p >{rowData.PaymentSettings}</p>
const pTemplate5 = (rowData, { rowIndex }) => <p >{rowData.AuthenticationSettings}</p>
const pTemplate6 = (rowData, { rowIndex }) => <p >{rowData.IntegrationSettings}</p>
const pTemplate7 = (rowData, { rowIndex }) => <p >{rowData.DatabaseSettings}</p>
const pTemplate8 = (rowData, { rowIndex }) => <p >{rowData.PerformanceSettings}</p>
const pTemplate9 = (rowData, { rowIndex }) => <p >{rowData.BackupSettings}</p>
    const editTemplate = (rowData, { rowIndex }) => <Button onClick={() => onEditRow(rowData, rowIndex)} icon={`pi ${rowData.isEdit ? "pi-check" : "pi-pencil"}`} className={`p-button-rounded p-button-text ${rowData.isEdit ? "p-button-success" : "p-button-warning"}`} />;
    const deleteTemplate = (rowData, { rowIndex }) => <Button onClick={() => onRowDelete(rowData._id)} icon="pi pi-times" className="p-button-rounded p-button-danger p-button-text" />;
    const pCreatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.createdAt).fromNow()}</p>;
    const pUpdatedAt = (rowData, { rowIndex }) => <p>{moment(rowData.updatedAt).fromNow()}</p>;
    const pCreatedBy = (rowData, { rowIndex }) => <p>{rowData.createdBy?.name}</p>;
    const pUpdatedBy = (rowData, { rowIndex }) => <p>{rowData.updatedBy?.name}</p>;
    const paginatorLeft = <Button type="button" icon="pi pi-upload" text onClick={() => setShowUpload(true)} disabled={!false}/>;
    const paginatorRight = DownloadCSV({ data : items, fileName : "servicesettings"});
    const exportCSV = () => {dt.current?.exportCSV();};

    return (
        <>
        <DataTable value={items} ref={dt} removableSort onRowClick={onRowClick} scrollable rowHover stripedRows paginator rows={10} rowsPerPageOptions={[10, 50, 250, 500]} size={"small"}  paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="{first} to {last} of {totalRecords}" paginatorLeft={paginatorLeft} paginatorRight={paginatorRight} rowClassName="cursor-pointer" alwaysShowPaginator={!urlParams.singleUsersId} loading={loading}>
<Column field="ProjectID" header="ProjectID" body={pTemplate0} filter={selectedFilterFields.includes("ProjectID")} hidden={selectedHideFields?.includes("ProjectID")}  sortable style={{ minWidth: "8rem" }} />
<Column field="NotficationSettings" header="Notfication Settings" body={pTemplate1} filter={selectedFilterFields.includes("NotficationSettings")} hidden={selectedHideFields?.includes("NotficationSettings")}  sortable style={{ minWidth: "8rem" }} />
<Column field="ServerSettings" header="Server Settings" body={pTemplate2} filter={selectedFilterFields.includes("ServerSettings")} hidden={selectedHideFields?.includes("ServerSettings")}  sortable style={{ minWidth: "8rem" }} />
<Column field="SecuritySettings" header="Security Settings" body={pTemplate3} filter={selectedFilterFields.includes("SecuritySettings")} hidden={selectedHideFields?.includes("SecuritySettings")}  sortable style={{ minWidth: "8rem" }} />
<Column field="PaymentSettings" header="Payment Settings" body={pTemplate4} filter={selectedFilterFields.includes("PaymentSettings")} hidden={selectedHideFields?.includes("PaymentSettings")}  sortable style={{ minWidth: "8rem" }} />
<Column field="AuthenticationSettings" header="Authentication Settings" body={pTemplate5} filter={selectedFilterFields.includes("AuthenticationSettings")} hidden={selectedHideFields?.includes("AuthenticationSettings")}  sortable style={{ minWidth: "8rem" }} />
<Column field="IntegrationSettings" header="Integration Settings" body={pTemplate6} filter={selectedFilterFields.includes("IntegrationSettings")} hidden={selectedHideFields?.includes("IntegrationSettings")}  sortable style={{ minWidth: "8rem" }} />
<Column field="DatabaseSettings" header="Database Settings" body={pTemplate7} filter={selectedFilterFields.includes("DatabaseSettings")} hidden={selectedHideFields?.includes("DatabaseSettings")}  sortable style={{ minWidth: "8rem" }} />
<Column field="PerformanceSettings" header="Performance Settings" body={pTemplate8} filter={selectedFilterFields.includes("PerformanceSettings")} hidden={selectedHideFields?.includes("PerformanceSettings")}  sortable style={{ minWidth: "8rem" }} />
<Column field="BackupSettings" header="Backup Settings" body={pTemplate9} filter={selectedFilterFields.includes("BackupSettings")} hidden={selectedHideFields?.includes("BackupSettings")}  sortable style={{ minWidth: "8rem" }} />
            <Column header="Edit" body={editTemplate} />
            <Column header="Delete" body={deleteTemplate} />
            {/*<Column field="createdAt" header="created" body={pCreatedAt} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="updatedAt" header="updated" body={pUpdatedAt} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="createdBy" header="createdBy" body={pCreatedBy} sortable style={{ minWidth: "8rem" }} />*/}
            {/*<Column field="updatedBy" header="updatedBy" body={pUpdatedBy} sortable style={{ minWidth: "8rem" }} />*/}
        </DataTable>
        <Dialog header="Upload Servicesettings Data" visible={showUpload} onHide={() => setShowUpload(false)}>
        <UploadService />
      </Dialog>

      <Dialog header="Search Servicesettings" visible={searchDialog} onHide={() => setSearchDialog(false)}>
      Search
    </Dialog>
    <Dialog
        header="Filter Users"
        visible={showFilter}
        onHide={() => setShowFilter(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedFilterFields}
            onChange={(e) => setSelectedFilterFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedFilterFields);
            onClickSaveFilteredfields(selectedFilterFields);
            setSelectedFilterFields(selectedFilterFields);
            setShowFilter(false)
          }}
        ></Button>
      </Dialog>

      <Dialog
        header="Hide Columns"
        visible={showColumns}
        onHide={() => setShowColumns(false)}
      >
        <div className="card flex justify-content-center">
          <MultiSelect
            value={selectedHideFields}
            onChange={(e) => setSelectedHideFields(e.value)}
            options={fields}
            optionLabel="name"
            optionValue="value"
            filter
            placeholder="Select Fields"
            maxSelectedLabels={6}
            className="w-full md:w-20rem"
          />
        </div>
        <Button
          text
          label="save as pref"
          onClick={() => {
            console.log(selectedHideFields);
            onClickSaveHiddenfields(selectedHideFields);
            setSelectedHideFields(selectedHideFields);
            setShowColumns(false)
          }}
        ></Button>
      </Dialog>
        </>
    );
};

export default ServicesettingsDataTable;