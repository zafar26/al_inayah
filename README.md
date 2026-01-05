### Al Inayah

Smaple App

### Installation

You can install this app using the [bench](https://github.com/frappe/bench) CLI:

```bash
cd $PATH_TO_YOUR_BENCH

bench get-app https://github.com/zafar26/al_inayah --branch develop

bench install-app al_inayah
```

### API for getting Maunufacturer Items
URL
```
{URL}/api/method/al_inayah.api.manufacturer_mappings.search
```
Params as Form Dict
```
item : {ITEM NAME}
```
You will get Response as Shown in the below Image 

<img width="1170" height="1328" alt="image" src="https://github.com/user-attachments/assets/a50752cc-8c0e-4316-a8d3-d3f5d94ed030" />



### Contributing

This app uses `pre-commit` for code formatting and linting. Please [install pre-commit](https://pre-commit.com/#installation) and enable it for this repository:

```bash
cd apps/al_inayah
pre-commit install
```

Pre-commit is configured to use the following tools for checking and formatting your code:

- ruff
- eslint
- prettier
- pyupgrade

### License

mit
