package com.javacodegeeks.examples.controller;

import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.dataloader.connection.Connector;
import com.dataloader.connection.bulkapi.BulkHandler;
import com.dataloader.connection.objects.ObjectsHandler;
import com.dataloader.connection.query.QueryHandler;
import com.dataloader.dataupload.RecordsCreation;

@Controller
public class MainController {

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String homepage() {
		return "/index.html";
	}

	@RequestMapping(value = "/login_request", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> sfdcLogin(@RequestHeader String username, @RequestHeader String password,
			@RequestHeader String version, @RequestHeader String orgtype) {
		return Connector.loginToSalesforce(username, password, version, orgtype);
	}

	@RequestMapping(value = "/soql_request", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> sfdcQuery(@RequestHeader String baseURL, @RequestHeader String version,
			@RequestHeader String sessionId, @RequestHeader String query) {
		return QueryHandler.exportData(baseURL, version, sessionId, query);
	}

	@RequestMapping(value = "/query_more_request", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> sfdcQueryMore(@RequestHeader String baseURL, @RequestHeader String sessionId) {
		return QueryHandler.queryMore(baseURL, sessionId);
	}

	@RequestMapping(value = "/create_delete_job", method = RequestMethod.POST)
	@ResponseBody
	public String sfdcBulkDeleteJob(@RequestHeader String baseURL, @RequestHeader String version,
			@RequestHeader String sessionId, @RequestHeader String object, @RequestHeader String operation) {
		return BulkHandler.createJob(baseURL, version, object, operation, "FILE", sessionId);
	}

	

	@RequestMapping(value = "/process_delete_job", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> sfdcBulkDeleteOperation(@RequestHeader String baseURL, @RequestHeader String version,
			@RequestHeader String sessionId, @RequestParam String payload, @RequestHeader String jobId) {
		System.out.println(payload);
		return BulkHandler.uploadDataBatch(baseURL, version, sessionId, jobId, "CSV", payload);
	}

	@RequestMapping(value = "/describe_all", method = RequestMethod.POST)
	@ResponseBody
	public String describeAll(@RequestHeader String baseURL, @RequestHeader String version,
			@RequestHeader String sessionId) {
		return ObjectsHandler.describeAllObjects(baseURL, version, sessionId);
	}

	@RequestMapping(value = "/describe_obj", method = RequestMethod.POST)
	@ResponseBody
	public String describeObject(@RequestHeader String baseURL, @RequestHeader String version,
			@RequestHeader String sessionId, @RequestParam String objectName) {
		return ObjectsHandler.describeObject(baseURL, version, sessionId, objectName);
	}

	@RequestMapping(value = "/child_records", method = RequestMethod.POST)
	@ResponseBody
	public String childRecords(@RequestHeader String baseURL, @RequestHeader String version,
			@RequestHeader String sessionId, @RequestHeader String objectName, @RequestHeader String recordIds,
			@RequestHeader String relationShipName) {
		return ObjectsHandler.describeChildRecords(baseURL, version, sessionId, objectName, recordIds, relationShipName);
	}
	
	@RequestMapping(value = "/upload_records", method = RequestMethod.POST)
	@ResponseBody
	public String uploadRecords(@RequestHeader String baseURL, @RequestHeader String version,
			@RequestHeader String sessionId, @RequestHeader String objectName, @RequestHeader String dataBody) {
		return RecordsCreation.createRecords(baseURL, version, objectName, sessionId, dataBody);
	}

	@RequestMapping(value = "/change_status_job", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> sfdcBulkDeleteOperationChangeStatus(@RequestHeader String jobId, @RequestHeader String version,
			@RequestHeader String baseURL, @RequestHeader String sessionId) {
	 
	 return BulkHandler.changeStatusOfJob(jobId, version, baseURL, sessionId);
	}

	@RequestMapping(value = "/get_job_status", method = RequestMethod.POST)
	@ResponseBody
	public Map<String, String> sfdcBulkDeleteOperationGetJobStatus(@RequestHeader String jobId, @RequestHeader String version,
			@RequestHeader String baseURL, @RequestHeader String sessionId) {
	 
	 return BulkHandler.getJobStatus(baseURL, version, sessionId, jobId);
	}
}