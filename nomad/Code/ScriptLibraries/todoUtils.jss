
//Utility method for use in the databaseName property of data sources on an XPage
var findDbUtil = function() {
	if(bluemixContext.isRunningOnBluemix()) {
		if(bluemixContext.isHybridApplication()) {
			//Hybrid use case - replace "tododata.nsf" with the path of your data nsf
	        return bluemixContext.findHybridDatabaseName("tododata.nsf");
		}else{
			//Database service use case
			return bluemixContext.getDataService().findDatabaseName();
		}
	}else{
		//Local database use case
		session.getCurrentDatabase().getFilePath();
	}
}

//Utility method for use to replace calls to the database global object in SSJS
var getDBObj = function (doc) {
	if( null === requestScope.dataServiceDatabase) {
		if (bluemixContext.isRunningOnBluemix()) {
			if (bluemixContext.isHybridApplication()) {
				//Hybrid use case - replace "tododata.nsf" with the path of your data nsf
				var hybridVector = bluemixContext.atHybridDbName("tododata.nsf");
				var hybridDatabase = session.getDatabase(hybridVector.get(0),hybridVector.get(1));
				requestScope.dataServiceDatabase = hybridDatabase;
			}else{
				//Database service use case
				var otherDatabaseVector = bluemixContext.getDataService().atDbName();
				var otherDatabase = session.getDatabase(otherDatabaseVector.get(0),otherDatabaseVector.get(1));
				requestScope.dataServiceDatabase = otherDatabase;
			}
		} else {
			//Local database use case
			requestScope.dataServiceDatabase = database;
		}
	}
	return requestScope.dataServiceDatabase;
}

var isComplete = function (complete) {
	return (null != complete && "" !== complete && complete.equals("true"));
}

var isOverdue = function (complete, dueDate) {
	if(null != dueDate && !isComplete(complete)) {
		var due:java.util.Date = new java.util.Date(dueDate.getTime());
		var now:NotesDateTime = session.createDateTime("Today");
		now.setNow();
		
		var nowDate:java.util.Date = now.toJavaDate();
		var format:java.text.SimpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd-HH:mm");
		return format.format(due) < format.format(nowDate);
	}
	return false;
}

var isUrgent = function (complete, dueDate) {
	if(null != dueDate && !isComplete(complete)) {
		var due:java.util.Date = new java.util.Date(dueDate.getTime());
		var urgent:NotesDateTime = session.createDateTime("Today");
		urgent.setNow();
		urgent.adjustDay(3);
		
		var urgentDate:java.util.Date = urgent.toJavaDate();
		var format:java.text.SimpleDateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd-HH:mm");
		return format.format(due) < format.format(urgentDate);
	}
	return false;
}

var getTodoCount = function() {
	var dbObj = getDBObj();
	if(null != dbObj) {
		var todos:NotesView = dbObj.getView("todosView");
		if(null != todos && "" !== todos) {
			return todos.getEntryCount();
		}
	}
	return 0;
}

var getOverdueCount = function() {
	var dbObj = getDBObj();	
	if(null != dbObj) {
		var overdue:NotesView = dbObj.getView("overdueView");
		if(null != overdue && "" !== overdue) {
			return overdue.getEntryCount();
		}
	}
	return 0;
}

var getCompleteCount = function() {
	var dbObj = getDBObj();
	if(null != dbObj) {
		var complete:NotesView = dbObj.getView("completeView");
		if(null != complete && "" !== complete) {
			return complete.getEntryCount();
		}
	}
	return 0;
}

var getUrgentCount = function() {
	var dbObj = getDBObj();
	if(null != dbObj) {
		var urgent:NotesView = dbObj.getView("urgentView");
		if(null != urgent && "" !== urgent) {
			return urgent.getEntryCount();
		}
	}
	return 0;
}

var getIncompleteCount = function() {
	var todoCount     = 0;
	var completeCount = 0;
	var dbObj = getDBObj();
	if(null != dbObj) {
		var todos:NotesView    = dbObj.getView("todosView");
		var complete:NotesView = dbObj.getView("completeView");
	
		if(null != todos && "" !== todos) {
			todoCount = todos.getEntryCount();
		}
		if(null != complete && "" !== complete) {
			completeCount = complete.getEntryCount();
		}
	}
	
	var incompleteCount = todoCount - completeCount; 
	return incompleteCount;
}

var isBootstrap3 = function() {
	if(null != sessionScope.bootstrap3Theme) {
		return sessionScope.bootstrap3Theme;
	}
	var theme = facesContext.getStyleKit();
    while(null != theme && theme.getParent() != null) {
    	theme = theme.getParent();
    }
    if(null != theme && theme.getName().indexOf("Bootstrap3") == 0) {
    	sessionScope.bootstrap3Theme = true;
    	return true;
    }
    sessionScope.bootstrap3Theme = false;
    return false;
}

var isBootstrap4 = function() {
	if(null != sessionScope.bootstrap4Theme) {
		return sessionScope.bootstrap4Theme;
	}
	var theme = facesContext.getStyleKit();
    while(null != theme && theme.getParent() != null) {
    	theme = theme.getParent();
    }
    if(null != theme && theme.getName().indexOf("Bootstrap4") == 0) {
    	sessionScope.bootstrap4Theme = true;
    	return true;
    }
    sessionScope.bootstrap4Theme = false;
    return false;
}