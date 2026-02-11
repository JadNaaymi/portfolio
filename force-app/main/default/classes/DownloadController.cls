public with sharing class DownloadController {
    @AuraEnabled
    public static void logDownload(String contactName) {
        // Create an interaction record
        Site_Interaction__c interaction = new Site_Interaction__c();
        interaction.Type__c = 'CV Download';
        interaction.Timestamp__c = System.now();
        insert interaction;
        
        // This record creation can trigger a Salesforce Flow!
    }
}