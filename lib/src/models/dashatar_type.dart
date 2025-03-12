/// The type of dashatar to display
enum DashatarType {
  /// Designer dashatar
  designer('Designer'),

  /// Developer dashatar
  developer('Developer'),

  /// Manager dashatar
  manager('Manager');

  /// Creates a new dashatar type
  const DashatarType(this.value);

  /// The string value of the type
  final String value;
}
