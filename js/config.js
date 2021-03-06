var tbConfig = angular.module('taskboardApp.config', []);

var config_data = {

  'CONFIG': {

    // Outlook Task folders
    // Name: Name of the task folder
    // Title: Task lane title
    // Limit: hard limits for each task lane. 0 = no limit
    // Sort: Sort order for tasks (default = priority), can state multiple sort keys separated by comma, use '-' to sort descending, Example "duedate,-priority,subject"
    // Restrict: Restrict certain tasks (default = only show incomplete tasks) (More info = https://msdn.microsoft.com/en-us/library/office/ff869597.aspx)
    'BACKLOG_FOLDER': { Name: '', Title: 'BACKLOG', Limit: 0, Sort: "duedate,-priority", Restrict: "[Status] = 'Not Started'" },
    'NEXT_FOLDER': { Name: 'Kanban', Title: 'NEXT', Limit: 10, Sort: "duedate,-priority", Restrict: "[Status] = 'Not Started'" },
    'INPROGRESS_FOLDER': { Name: 'Kanban', Title: 'IN PROGRESS', Limit: 5, Sort: "-priority", Restrict: "[Status] = 'In Progress'" },
    'WAITING_FOLDER': { Name: 'Kanban', Title: 'WAITING', Limit: 0, Sort: "-priority", Restrict: "[Status] = 'Waiting on someone else'" },
    'COMPLETED_FOLDER': { Name: 'Kanban', Title: 'COMPLETED', Limit: 0, Sort: "-completeddate,-priority,subject", Restrict: "[Complete] = true " },
    'ARCHIVE_FOLDER': { Name: 'Completed' },

    // Task Note Excerpt Size
    // number of chars for each task note
    // 0 = makes no notes appear on the each task card
    'TASKNOTE_EXCERPT': 100,

    // Default task template
    'TASK_TEMPLATE': '\r\n\r\n### TODO:\r\n\r\n\r\n\r\n### STATUS:\r\n\r\n\r\n\r\n### ISSUES:\r\n\r\n\r\n\r\n### REFERENCE:\r\n\r\n\r\n\r\n',

    'DATE_FORMAT': 'dd-MMM',

    'SAVE_STATE': true,     // Preserve state between window.reloads (privacy and search filter)
    'PRIVACY_FILTER': true, // Add filter to separately handle private tasks

    // Outlook task statuses
    'STATUS': {
      'NOT_STARTED': { Value: 0, Text: "Not Started" },
      'IN_PROGRESS': { Value: 1, Text: "In Progress" },
      'WAITING': { Value: 3, Text: "Waiting For Someone Else" },
      'COMPLETED': { Value: 2, Text: "Completed" }
    },
  }
};

angular.forEach(config_data, function (key, value) {
  tbConfig.constant(value, key);
});

