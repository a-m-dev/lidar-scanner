# lidar-scanner
Scan, Process and visualize Lidar data from iOS device (IPhone, IPad)


### Main Idea
Process Lidara point clouds from Iphone and then process it and finally visualize it!

This Project has following parts:
1. `pointCloudScanner`: iOS app that its core responsibility is to read cloud point data and send it to `pointCloudPublisher` project
2. `pointCloudPublisher` has the main responsibility of processing point clouds and emitting messages through rabbitMQ to `pointCloudIngestor`
3. `pointCloudIngestor` will take all point cloud data and just store it in batch into respective collection
4. then `pointCloudReader` project will connect to the same data collection and will serve read requests
5. `pointCloudVisualizer` is the front end that will visualize the live data comming from backend


### Database
MongoDB has been choosen just for the sake of avalibility trade off + high read volumes, perferably a cache would be beneficial to speed up reads


### Scalability
Perferabliy 3 instances of `pointCloudPublisher` and `pointCloudIngestor` would be a great start, just to avoid requests from ios app being drop and increase availability of publisher and ingestor service!