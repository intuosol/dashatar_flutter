import 'dart:math';

import 'package:dashatar_flutter/dashatar_flutter.dart';
import 'package:dashatar_flutter_example/dashatar_source_code.dart';
import 'package:flutter/material.dart';
import 'package:widget_snippet/widget_snippet.dart';

/// Displays a customizer for the dashatar
class CustomizerTab extends StatefulWidget {
  const CustomizerTab({super.key});

  @override
  State<CustomizerTab> createState() => _CustomizerTabState();
}

class _CustomizerTabState extends State<CustomizerTab> {
  /// The current dashatar type
  DashatarType _type = DashatarType.developer;

  /// The current variant index
  int _variantIndex = 25;

  /// The current background color
  Color _backgroundColor = Colors.transparent;

  /// Background colors to choose from
  List<Color> get _colors => [
    Colors.transparent,
    Colors.red.shade100,
    Colors.blue.shade100,
    Colors.green.shade100,
    Colors.yellow.shade100,
    Colors.purple.shade100,
  ];

  /// Color names (used for the widget snippet)
  List<String> get _colorNames => [
    'transparent',
    'red.shade100',
    'blue.shade100',
    'green.shade100',
    'yellow.shade100',
    'purple.shade100',
  ];

  /// Randomizes the dashatar parameters
  void _randomize() {
    setState(() {
      _type = DashatarType.values[Random().nextInt(DashatarType.values.length)];
      _variantIndex = Random().nextInt(49);
      _backgroundColor = _colors[Random().nextInt(_colors.length)];
    });
  }

  /// Builds the dashatar with the current parameters
  Dashatar _buildDashatar() {
    return Dashatar(
      index: _variantIndex,
      type: _type,
      backgroundColor: _backgroundColor,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          // Preview
          Expanded(
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surfaceContainerHighest,
                borderRadius: BorderRadius.circular(16),
              ),
              child: _buildDashatar(),
            ),
          ),

          const SizedBox(height: 16),

          // Controls
          Expanded(
            flex: 2,
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              decoration: BoxDecoration(
                color: Theme.of(context).colorScheme.surfaceContainer,
                borderRadius: BorderRadius.circular(16),
              ),
              child: SingleChildScrollView(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const SizedBox(height: 16),
                    Row(
                      children: [
                        const Text(
                          'Customize',
                          style: TextStyle(
                            fontSize: 16,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                        const Spacer(),
                        // Shows the widget snippet for the current dashatar
                        // when tapped
                        IconButton.outlined(
                          visualDensity: VisualDensity.compact,
                          onPressed:
                              () => WidgetSnippet.showModal(
                                context: context,
                                widget: _buildDashatar(),
                                config: WidgetSnippetConfig(
                                  title: 'Dashatar Code Snippet',
                                ),
                                sourceCode: DashatarSourceCode.custom(
                                  index: _variantIndex,
                                  type: _type,
                                  colorName:
                                      _colorNames[_colors.indexOf(
                                        _backgroundColor,
                                      )],
                                ),
                              ),
                          icon: const Icon(Icons.code),
                        ),
                        const SizedBox(width: 8),
                        // Randomizes the dashatar parameters when tapped
                        ElevatedButton(
                          onPressed: _randomize,
                          child: const Text('Randomize'),
                        ),
                      ],
                    ),
                    const SizedBox(height: 8),

                    // Type selector
                    DropdownButtonFormField<DashatarType>(
                      decoration: const InputDecoration(
                        labelText: 'Type',
                        border: OutlineInputBorder(),
                      ),
                      value: _type,
                      items:
                          DashatarType.values.map((type) {
                            return DropdownMenuItem<DashatarType>(
                              value: type,
                              child: Text(type.value),
                            );
                          }).toList(),
                      onChanged: (value) {
                        if (value != null) {
                          setState(() {
                            _type = value;
                          });
                        }
                      },
                    ),

                    const SizedBox(height: 16),

                    // Variant index slider
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Variant Index: $_variantIndex',
                          style: const TextStyle(fontWeight: FontWeight.w500),
                        ),
                        Slider(
                          value: _variantIndex.toDouble(),
                          min: 0,
                          max: 48,
                          divisions: 48,
                          label: _variantIndex.toString(),
                          onChanged: (value) {
                            setState(() {
                              _variantIndex = value.round();
                            });
                          },
                        ),
                      ],
                    ),

                    const SizedBox(height: 16),

                    Wrap(
                      spacing: 8,
                      runSpacing: 8,
                      children:
                          _colors.map((color) {
                            return _colorOption(color);
                          }).toList(),
                    ),
                    const SizedBox(height: 16),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }

  /// Builds a color option
  Widget _colorOption(Color color) {
    bool isSelected = color == _backgroundColor;
    return InkWell(
      onTap: () {
        setState(() {
          _backgroundColor = color;
        });
      },
      child: Container(
        width: 60,
        height: 60,
        decoration: BoxDecoration(
          color: color,
          border: Border.all(
            color:
                isSelected
                    ? Theme.of(context).colorScheme.primary
                    : Colors.grey,
            width: isSelected ? 3 : 1,
          ),
          borderRadius: BorderRadius.circular(8),
        ),
      ),
    );
  }
}
